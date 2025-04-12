<script setup lang="ts">
import { reactive, watch } from 'vue'
import { type UserAddress } from '@/shared/interfaces/UserInterface'

import useVuelidate from '@vuelidate/core'
import useValidators from '../../../shared/composables/useValidator'

const emits = defineEmits<{
  'form-change': [object]
}>()

const { getErrorMessage, validationRulesUserAddress } = useValidators()

const form = reactive<UserAddress>({
  cp: null,
  street: '',
  outerNumber: null,
  interiorNumber: '',
  state: '',
  municipality: '',
  colony: '',
})

const catalogStates = [
  { key: 'AG', name: 'Aguascalientes' },
  { key: 'BC', name: 'Baja California' },
  { key: 'BS', name: 'Baja California Sur' },
  { key: 'CC', name: 'Campeche' },
  { key: 'CL', name: 'Coahuila' },
  { key: 'CM', name: 'Colima' },
  { key: 'CS', name: 'Chiapas' },
  { key: 'CH', name: 'Chihuahua' },
  { key: 'DF', name: 'Ciudad de México' },
  { key: 'DG', name: 'Durango' },
  { key: 'GT', name: 'Guanajuato' },
  { key: 'GR', name: 'Guerrero' },
  { key: 'HG', name: 'Hidalgo' },
  { key: 'JC', name: 'Jalisco' },
  { key: 'MC', name: 'México' },
  { key: 'MN', name: 'Michoacán' },
  { key: 'MS', name: 'Morelos' },
  { key: 'NT', name: 'Nayarit' },
  { key: 'NL', name: 'Nuevo León' },
  { key: 'OC', name: 'Oaxaca' },
  { key: 'PL', name: 'Puebla' },
  { key: 'QT', name: 'Querétaro' },
  { key: 'QR', name: 'Quintana Roo' },
  { key: 'SP', name: 'San Luis Potosí' },
  { key: 'SL', name: 'Sinaloa' },
  { key: 'SR', name: 'Sonora' },
  { key: 'TC', name: 'Tabasco' },
  { key: 'TS', name: 'Tamaulipas' },
  { key: 'TL', name: 'Tlaxcala' },
  { key: 'VZ', name: 'Veracruz' },
  { key: 'YN', name: 'Yucatán' },
  { key: 'ZS', name: 'Zacatecas' },
]

const $v = useVuelidate(validationRulesUserAddress, { form })

watch(form, () => {
  emits('form-change', form)
})
</script>
<template>
  <v-row>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.cp"
        label="Código Postal*"
        :error="!!$v.form.cp.$error"
        :error-messages="getErrorMessage($v.form.cp)"
        @blur="$v.form.cp.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="8">
      <v-text-field
        v-model="form.street"
        label="Calle*"
        variant="outlined"
        :error="!!$v.form.street.$error"
        :error-messages="getErrorMessage($v.form.street)"
        @blur="$v.form.street.$touch()"
      ></v-text-field>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.outerNumber"
        label="Numero exterior*"
        :error="!!$v.form.outerNumber.$error"
        :error-messages="getErrorMessage($v.form.outerNumber)"
        @blur="$v.form.outerNumber.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-text-field
        v-model="form.interiorNumber"
        label="Numero interior"
        :error="!!$v.form.interiorNumber.$error"
        :error-messages="getErrorMessage($v.form.interiorNumber)"
        @blur="$v.form.interiorNumber.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="4">
      <v-select
        v-model="form.state"
        label="Estado*"
        :error="!!$v.form.state.$error"
        :items="catalogStates"
        item-title="name"
        item-value="key"
        :error-messages="getErrorMessage($v.form.state)"
        @blur="$v.form.state.$touch()"
        variant="outlined"
      ></v-select>
    </v-col>
  </v-row>

  <v-row>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="form.municipality"
        label="Delegación/Municipio*"
        :error="!!$v.form.municipality.$error"
        :error-messages="getErrorMessage($v.form.municipality)"
        @blur="$v.form.municipality.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
    <v-col cols="12" sm="6">
      <v-text-field
        v-model="form.colony"
        label="Colonia*"
        :error="!!$v.form.colony.$error"
        :error-messages="getErrorMessage($v.form.colony)"
        @blur="$v.form.colony.$touch()"
        variant="outlined"
      ></v-text-field>
    </v-col>
  </v-row>
</template>
