<script setup lang="ts">
import { ref } from 'vue'

import AppBar from '../components/AppBar.vue'
import NavigationDrawer from '../components/NavigationDrawer.vue'

const drawer = ref(true)

const handleChangeDrawer = (value: boolean) => {
  drawer.value = value
}
</script>

<template>
  <v-card>
    <v-layout>
      <!-- AppBar -->
      <AppBar :drawer="drawer" @drawer-change="handleChangeDrawer" />
      <!-- NavigationDrawer -->
      <NavigationDrawer :drawer="drawer" @drawer-change="handleChangeDrawer" />
      <v-main style="height: 100vh; overflow-y: auto; overflow-x: hidden" class="scroll-container">
        <div style="padding: 20px; height: 100%">
          <router-view />
        </div>
      </v-main>
    </v-layout>
  </v-card>
</template>

<style scoped>
.layout {
  width: 100vw;
  height: 100vh;
}

.center {
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>
