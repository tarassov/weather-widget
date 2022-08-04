<script setup lang="ts">
import { ref } from "vue";
import WeatherView from "./WeatherView.vue";
import IconSettings from "./icons/IconSettings.vue";

const cities = ref<Array<TCity>>([{ name: "London" }]);
//const cities = ref<Array<TCity>>([]);
</script>

<template>
  <div class="v-header">
    <VButton
      icon="pi pi-cog"
      class="p-button-rounded p-button-text p-button-plain"
      v-tooltip.bottom="'Settings'"
    />
  </div>
  <div class="v-main">
    <div v-if="cities.length === 0" class="article-preview">
      No cities are selected
    </div>
    <template v-else>
      <WeatherView v-for="city in cities" :key="city.name" :city="city" />
    </template>
  </div>
</template>

<style lang="scss" scoped>
.v-header {
  display: flex;
  padding-right: 10px;
  background-color: var(--primary-color);
  justify-content: flex-end;
}
.v-main {
  margin: 0px auto;
  padding-top: 10px;
  text-align: center;
  background-color: white;
  color: var(--text-color);
  height: 400px;
}
</style>
