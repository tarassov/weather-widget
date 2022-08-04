<script setup lang="ts">
import { ref } from "vue";
import WeatherView from "./WeatherView.vue";

const cities = ref<Array<TCity>>([{ name: "London" }]);
</script>

<template>
  <div v-if="cities.length === 0" class="article-preview">
    No cities are selected
  </div>
  <template v-else>
    <WeatherView v-for="city in cities" :key="city.name" :city="city" />
  </template>
</template>
