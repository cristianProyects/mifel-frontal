<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    user: object
  }>(),
  {},
)
</script>
<template>
  <!-- Sitio web -->
  <v-row dense>
    <v-col cols="12">
      <v-icon icon="mdi-web" size="16" class="mr-1" />
      <a :href="'https://' + props.user.website" target="_blank" class="text-body-2">
        {{ props.user.website }}
      </a>
    </v-col>
  </v-row>
</template>
