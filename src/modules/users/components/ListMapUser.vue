<template>
    <div :id="mapId" class="map-container"></div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue'
  import * as L from 'leaflet'
  
  const props = defineProps<{
    lat: string
    lng: string
    mapId: string
  }>()
  
  onMounted(() => {
    const lat = parseFloat(props.lat)
    const lng = parseFloat(props.lng)
  
    if (!isNaN(lat) && !isNaN(lng)) {
      const map = L.map(props.mapId).setView([lat, lng], 1)
  
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map)
  
      L.marker([lat, lng]).addTo(map)
    } else {
      console.warn(`Coordenadas inválidas: ${props.lat}, ${props.lng}`)
    }
  })
  </script>
  
  <style scoped>
  .map-container {
    height: 200px;
    width: 100%;
    border-radius: 8px;
    margin-top: 12px;
  }
  </style>
  