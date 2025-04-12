<script setup lang="ts">
withDefaults(
  defineProps<{
    popup: {
      visible: boolean
      message: string
      icon: string
      iconColor: string
      bgColor: string
    }
  }>(),
  {},
)
</script>
<template>
  <v-dialog v-model="popup.visible" max-width="400" transition="dialog-bottom-transition">
    <v-card :color="popup.bgColor" class="pa-4" rounded="xl" elevation="8">
      <v-card-title class="justify-center text-center">
        <v-icon :color="popup.iconColor" size="48">
          {{ popup.icon }}
        </v-icon>
      </v-card-title>

      <v-card-text class="text-center text-white text-body-1">
        {{ popup.message }}
      </v-card-text>

      <v-card-actions class="justify-center mt-2">
        <v-btn color="white" variant="outlined" @click="popup.visible = false"> Cerrar </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
