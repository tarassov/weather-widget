<script setup lang="ts">
import { ref } from "vue";
import CityPreview from "./CityPreview.vue";

const cities = ref<Array<TCity>>([
  { name: "London" },
  { name: "Saint Petersburg" },
  { name: "Maiami" },
  { name: "New Yourk" },
  { name: "Tbilisi" },
]);
</script>

<template>
  <div class="settings-container"><h3>Settings</h3></div>
  <CityPreview v-for="city in cities" :city="city" :key="city.name" />
</template>

<style lang="scss" scoped>
.settings-container {
  padding-top: 15px;
}
</style>
