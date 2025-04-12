<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: object
  }>(),
  {},
)
</script>
<template>
  <!-- Email y teléfono -->
  <v-row dense>
    <v-col cols="12" sm="6">
      <v-icon icon="mdi-email-outline" size="16" class="mr-1" />
      <span class="text-body-2">{{ props.user.email }}</span>
    </v-col>
    <v-col cols="12" sm="6">
      <v-icon icon="mdi-phone" size="16" class="mr-1" />
      <span class="text-body-2">{{ props.user.phone }}</span>
    </v-col>
  </v-row>
</template>
