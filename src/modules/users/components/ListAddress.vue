<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: object
  }>(),
  {},
)
const fullAddress = `${props.user.address.street}, ${props.user.address.suite}, ${props.user.address.city}, C.P. ${props.user.address.zipcode}`
</script>
<template>
  <!-- Dirección y Empresa -->
  <v-row dense>
    <v-col cols="12" sm="6">
      <v-icon icon="mdi-map-marker-outline" size="16" class="mr-1" />
      <span class="text-body-2">{{ fullAddress }}</span>
    </v-col>
    <v-col cols="12" sm="6">
      <v-icon icon="mdi-domain" size="16" class="mr-1" />
      <span class="text-body-2">{{ props.user.company.name }}</span>
    </v-col>
  </v-row>
</template>
