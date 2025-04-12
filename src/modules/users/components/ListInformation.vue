<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: object
  }>(),
  {},
)
</script>

<template>
  <!-- Nombre y username -->
  <v-row>
    <v-col cols="8">
      <div class="text-subtitle-1 font-weight-medium">{{ props.user.name }}</div>
      <div class="text-caption text-grey">{{ props.user.username }}</div>
    </v-col>
    <v-col cols="4" class="text-end">
      <v-icon icon="mdi-account" color="primary" size="32" />
    </v-col>
  </v-row>
</template>
