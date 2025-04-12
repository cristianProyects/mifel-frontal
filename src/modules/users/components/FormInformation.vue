<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type UserInformation } from '@/shared/interfaces/UserInterface'

import useVuelidate from '@vuelidate/core'
import useValidators from '../../../shared/composables/useValidator'

const emits = defineEmits<{
  'form-change': [object]
}>()

const { getErrorMessage, validationRulesUserInformation } = useValidators()

const form = reactive<UserInformation>({
  name: '',
  firstName: '',
  secondName: '',
  curp: '',
  rfc: '',
})

const $v = useVuelidate(validationRulesUserInformation, { form })

watch(form, () => {
  emits('form-change', form)
})
</script>
<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.name"
        label="Nombre*"
        :error="!!$v.form.name.$error"
        :error-messages="getErrorMessage($v.form.name)"
        @blur="$v.form.name.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.firstName"
        label="Primer apellido*"
        :error="!!$v.form.firstName.$error"
        :error-messages="getErrorMessage($v.form.firstName)"
        @blur="$v.form.firstName.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.secondName"
        label="Segundo apellido"
        :error="!!$v.form.secondName.$error"
        :error-messages="getErrorMessage($v.form.secondName)"
        @blur="$v.form.secondName.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="form.curp"
        label="CURP*"
        :error="!!$v.form.curp.$error"
        :error-messages="getErrorMessage($v.form.curp)"
        @blur="$v.form.curp.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="form.rfc"
        label="RFC (con homoclave)*"
        :error="!!$v.form.rfc.$error"
        :error-messages="getErrorMessage($v.form.rfc)"
        @blur="$v.form.rfc.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
