<script setup lang="ts">
import { ref, watch } from 'vue'
import { type Routes } from '../../../shared/interfaces/RoutesInterface'

const props = withDefaults(
  defineProps<{
    drawer: boolean
  }>(),
  {
    drawer: false,
  },
)

const show = ref(true)

watch(
  props,
  () => {
    show.value = props.drawer
  },
  { immediate: true },
)

const emits = defineEmits<{
  'drawer-change': [boolean]
}>()

watch(
  show,
  () => {
    emits('drawer-change', show.value)
  },
  { immediate: true },
)

const menus = ref<Routes[]>([
  {
    title: 'Lista usarios',
    to: { name: 'users-list' },
    icon: 'mdi-account-group',
  },
  {
    title: 'Crear usuario',
    to: { name: 'users-form' },
    icon: 'mdi-account-plus',
  },
])
</script>

<template>
  <v-navigation-drawer
    v-model="show"
    :location="$vuetify.display.mobile ? 'bottom' : undefined"
    :temporary="$vuetify.display.mobile ? true : false"
    :style="$vuetify.display.mobile ? 'border-radius:25px 25px 0 0' : ''"
  >
    <v-list class="ma-5">
      <v-list-item
        :prepend-avatar="'https://res.cloudinary.com/du5sfssmd/image/upload/v1705546958/usuario_llsiva.png'"
        :subtitle="'Administrador'"
        :title="'Cristian'"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <div v-for="item in menus" :key="item.icon">
        <router-link :to="item.to">
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.title"
            :value="item.title"
            class="elevation-0 rounded-lg ma-5"
          ></v-list-item>
        </router-link>
      </div>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
a,
a:visited,
a:hover,
a:focus,
a:active {
  text-decoration: none;
  color: inherit;
  margin: 0;
  padding: 0;
  border: none;
  background: none;
}
</style>
