<script setup lang="ts">
import FormInformation from '../components/FormInformation.vue'
import FormAddress from '../components/FormAddress.vue'
import useVuelidate from '@vuelidate/core'

import PopupDialog from '../components/Popup.vue'
import type { Popup as PopupInterface } from '@/shared/interfaces/PopupInterface'
import { reactive } from 'vue'
import { createUser } from '../services/api'

const $v = useVuelidate()
const popup = reactive<PopupInterface>({
  visible: false,
  message: '',
  icon: '',
  iconColor: '',
  bgColor: '',
})

let formUserInformation = {}
let formUserAddress = {}

const handleChangeInformation = (data: any) => {
  formUserInformation = data
}
const handleChangeAddress = (data: any) => {
  formUserAddress = data
}
const submit = async () => {
  const isValid = await $v.value.$validate()

  if (isValid) {
    Object.assign(popup, {
      visible: true,
      message: 'Campos validados correctamente',
      icon: 'mdi-check-circle-outline',
      iconColor: 'light-green-accent-3',
      bgColor: 'green-darken-2',
    } satisfies PopupInterface)

    console.log(formUserAddress)
    console.log(formUserInformation)

    await createUser({ formUserAddress, formUserInformation })
  } else {
    Object.assign(popup, {
      visible: true,
      message: 'Existen campos por validar',
      icon: 'mdi-alert-circle-outline',
      iconColor: 'red-lighten-3',
      bgColor: 'red-darken-2',
    } satisfies PopupInterface)
    $v.value.$touch()
  }
}
</script>
<template>
  <div>
    <v-card class="mx-15" prepend-icon="mdi-clipboard-account" subtitle="Identificación">
      <template v-slot:title>
        <span class="font-weight-black">Alta de contribuyente</span>
      </template>
      <v-card-text class="bg-surface-light pt-4">
        <FormInformation @form-change="handleChangeInformation" />
        <FormAddress @form-change="handleChangeAddress" />
        <v-row class="mx-auto items-center justify-center w-full mb-2">
          <v-btn @click="submit">guardar</v-btn>
        </v-row>
      </v-card-text>
    </v-card>
    <!-- POPUP -->
    <PopupDialog :popup="popup" />
  </div>
</template>
