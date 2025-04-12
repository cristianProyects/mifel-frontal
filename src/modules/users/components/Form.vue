<script setup lang="ts">
import { reactive } from 'vue'
import { type User } from '@/shared/interfaces/UserInterface'

import useVuelidate from '@vuelidate/core'
import useValidators from '../../../shared/composables/useValidator'

import PopupDialog from './Popup.vue'
import type { Popup as PopupInterface } from '@/shared/interfaces/PopupInterface'

const { getErrorMessage, validationRulesUsers } = useValidators()

const form = reactive<User>({
  name: '',
  firstName: '',
  secondName: '',
  curp: '',
  rfc: '',
  cp: null,
  street: '',
  outerNumber: null,
  interiorNumber: '',
  state: '',
  municipality: '',
  colony: '',
})

const $v = useVuelidate(validationRulesUsers, { form })


const popup = reactive<PopupInterface>({
  visible: false,
  message: '',
  icon: '',
  iconColor: '',
  bgColor: '',
})

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
  <v-card class="mx-15" prepend-icon="mdi-clipboard-account" subtitle="Identificación">
    <template v-slot:title>
      <span class="font-weight-black">Alta de contribuyente</span>
    </template>
    <v-card-text class="bg-surface-light pt-4">
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.name" label="Nombre" :error="!!$v.form.name.$error"
            :error-messages="getErrorMessage($v.form.name)" @blur="$v.form.name.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.firstName" label="Primer apellido" :error="!!$v.form.firstName.$error"
            :error-messages="getErrorMessage($v.form.firstName)" @blur="$v.form.firstName.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.secondName" label="Segundo apellido" :error="!!$v.form.secondName.$error"
            :error-messages="getErrorMessage($v.form.secondName)" @blur="$v.form.secondName.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field required v-model="form.curp" label="CURP" :error="!!$v.form.curp.$error"
            :error-messages="getErrorMessage($v.form.curp)" @blur="$v.form.curp.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field required v-model="form.rfc" label="RFC (con homoclave)" :error="!!$v.form.rfc.$error"
            :error-messages="getErrorMessage($v.form.rfc)" @blur="$v.form.rfc.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.cp" label="Código Postal" :error="!!$v.form.cp.$error"
            :error-messages="getErrorMessage($v.form.cp)" @blur="$v.form.cp.$touch()" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="8">
          <v-text-field required v-model="form.street" label="Calle" variant="outlined"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.outerNumber" label="Numero exterior"
            :error="!!$v.form.outerNumber.$error" :error-messages="getErrorMessage($v.form.outerNumber)"
            @blur="$v.form.outerNumber.$touch()" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.interiorNumber" label="Numero interior"
            :error="!!$v.form.interiorNumber.$error" :error-messages="getErrorMessage($v.form.interiorNumber)"
            @blur="$v.form.interiorNumber.$touch()" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-text-field required v-model="form.state" label="Estado" :error="!!$v.form.state.$error"
            :error-messages="getErrorMessage($v.form.state)" @blur="$v.form.state.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" sm="6">
          <v-text-field required v-model="form.municipality" label="Delegación/Municipio"
            :error="!!$v.form.municipality.$error" :error-messages="getErrorMessage($v.form.municipality)"
            @blur="$v.form.municipality.$touch()" variant="outlined"></v-text-field>
        </v-col>
        <v-col cols="12" sm="6">
          <v-text-field required v-model="form.colony" label="Colonia" :error="!!$v.form.colony.$error"
            :error-messages="getErrorMessage($v.form.colony)" @blur="$v.form.colony.$touch()"
            variant="outlined"></v-text-field>
        </v-col>
      </v-row>
      <v-row class="mx-auto items-center justify-center w-full mb-2">
        <v-btn @click="submit">guardar</v-btn>
      </v-row>
    </v-card-text>
  </v-card>
  <!-- POPUP -->
  <PopupDialog :popup="popup" />
</template>
<style scoped></style>
