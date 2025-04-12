<script setup lang="ts">
import ListInformation from '../components/ListInformation.vue'
import ListAddress from '../components/ListAddress.vue'
import ListContact from '../components/ListContact.vue'
import ListSite from '../components/ListSite.vue'
import { ref, onMounted } from 'vue'
import { listUsers } from '../services/api'

const userListJson = ref([])

const userList = async () => {
  const response = await listUsers()
  userListJson.value = response
  console.log('Usuarios:', userListJson.value)
}

onMounted(() => {
  userList()
})
</script>

<template>
  <v-row dense>
    <v-col v-for="user in userListJson" :key="user.id" cols="12" sm="6" md="6" lg="4">
      <v-card class="mx-auto my-4 pa-4" max-width="450" elevation="2" rounded="lg">
        <ListInformation :user="user" />
        <ListContact :user="user" />
        <ListAddress :user="user" />
        <ListSite :user="user" />

        <v-row class="mt-3" dense>
          <v-col cols="6">
            <v-btn block color="blue-darken-2" size="small" variant="outlined"> Actualizar </v-btn>
          </v-col>
          <v-col cols="6">
            <v-btn block color="red-darken-2" size="small" variant="outlined"> Eliminar </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
