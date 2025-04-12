<script setup lang="ts">
import { watch, ref } from 'vue'

const props = withDefaults(
  defineProps<{
    drawer: boolean
  }>(),
  {
    drawer: false,
  },
)

const emits = defineEmits<{
  'drawer-change': [boolean]
}>()

const show = ref(true)

watch(
  props,
  () => {
    show.value = props.drawer
  },
  { immediate: true },
)

const handleChangeShow = () => {
  show.value = !show.value
  emits('drawer-change', show.value)
}
</script>

<template>
  <v-app-bar prominent>
    <v-app-bar-nav-icon variant="text" @click.stop="handleChangeShow"></v-app-bar-nav-icon>
    <v-toolbar-title>Banca MIFEL</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
