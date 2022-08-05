<script setup lang="ts">
import { ref, computed } from "vue";
import WeatherView from "./WeatherView.vue";
import SettingsLayout from "./SettingsLayout.vue";

const settingsMode = ref(false);

const cities = ref<Array<TCity>>([
  { name: "London" },
  { name: "Saint Petersburg" },
  { name: "Maiami" },
  { name: "New Yourk" },
  { name: "Tbilisi" },
]);
const toggleMenu = () => {
  settingsMode.value = !settingsMode.value;
};

const menuIcon = computed(() => {
  return `pi ${settingsMode.value ? "pi-times" : "pi-cog"}`;
});

//const cities = ref<Array<TCity>>([]);
</script>

<template>
  <div class="v-menu">
    <VButton
      :icon="menuIcon"
      class="p-button-rounded p-button-text p-button-plain"
      v-tooltip.bottom="'Settings'"
      @click="toggleMenu"
    />
  </div>
  <div class="v-main v-list" v-if="!settingsMode">
    <div v-if="cities.length === 0" class="article-preview">
      No cities are selected
    </div>
    <template v-else>
      <WeatherView v-for="city in cities" :key="city.name" :city="city" />
    </template>
  </div>
  <div class="v-main v-list" v-else><SettingsLayout /></div>
</template>

<style lang="scss" scoped>
.v-menu {
  position: absolute;
  right: 0px;
  z-index: 3;
}
.v-main {
  text-align: center;
  background-color: white;
  color: var(--text-color);
  max-height: 500px;
}
.v-list {
  height: -webkit-calc(100vh - 180px);
  height: -moz-calc(100vh - 180px);
  height: calc(100vh - 180px);
  overflow-y: scroll;
  overflow-x: hidden;
}

.v-list::-webkit-scrollbar {
  width: 5px;
  height: 5px;
  background-color: var(--background-color);
}

.v-list::-webkit-scrollbar-thumb {
  background: var(--v-scroll-color);
}
</style>
