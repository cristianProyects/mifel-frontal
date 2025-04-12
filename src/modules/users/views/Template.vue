<script setup lang="ts">
import {  ref } from "vue";
import { useRouter } from 'vue-router'
import { type Routes } from "../../../shared/interfaces/RoutesInterface";

const routes = ref<Routes[]>([
    {
        title: 'Lista usarios',
        value: 'users-list',
        icon: 'mdi-account-group'
    },
    {
        title: 'Crear usuario',
        value: 'users-form',
        icon: 'mdi-account-plus'
    },
])

const router = useRouter()

const handleRedirect = (route: Routes)=>{
    router.push({ name: `${route.value}` })
}
</script>

<template>
    <v-card class="layout">
        <v-layout>
            <v-navigation-drawer location="left" permanent>
                <template v-slot:prepend>
                    <v-list-item lines="two"
                        prepend-avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWgHWc1vMLv1qvtOA2sykVp6mwZOHxT6gKvg&s"
                        title="Banca MIFEL"></v-list-item>
                </template>

                <v-divider></v-divider>

                <v-list density="compact" nav v-for="route in routes" :key="route.icon">
                    <v-list-item :prepend-icon="route.icon" :title="route.title" :value="route.value" @click="handleRedirect(route)"></v-list-item>
                </v-list>
            </v-navigation-drawer>
            <v-main style="height: 100vh; overflow-y:scroll ;" class="mx-auto pl-20 pt-5 pb-5 pr-5">
                <router-view class="center"/>
            </v-main>
        </v-layout>
    </v-card>
</template>

<style scoped>
.layout {
    width: 100vw;
    height: 100vh;
}
.center{
    justify-content: center;
    align-items: center;
    height: 100%;
}
</style>
