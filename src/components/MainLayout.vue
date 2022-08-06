<script setup lang="ts">
import { ref, computed, onMounted, watch } from "vue";
import WeatherView from "./WeatherView.vue";
import SettingsLayout from "./SettingsLayout.vue";
import SettingsLayout1 from "./SettingsLayout.vue";

const settingsMode = ref(false);

const cities = ref<Array<TCity>>([
  { name: "London", index: 1 },
  { name: "Saint Petersburg", index: 2 },
  { name: "Maiami", index: 3 },
  { name: "New Yourk", index: 4 },
  { name: "Tbilisi", index: 5 },
]);
//const cities = ref<Array<TCity>>([]);

const toggleMenu = () => {
  settingsMode.value = !settingsMode.value;
};

const menuIcon = computed(() => {
  return `pi ${settingsMode.value ? "pi-times" : "pi-cog"}`;
});

onMounted(() => {
  const storageData = localStorage.getItem("cities");
  if (storageData) {
    try {
      cities.value = JSON.parse(storageData);
    } catch (e) {
      localStorage.removeItem("cities");
    }
  }
});

const saveCities = () => {
  // console.log(cities.value);
  const parsed = JSON.stringify(cities.value);
  localStorage.setItem("cities", parsed);
};

const add = (city: TCity) => {
  cities.value.push(city);
  console.log(cities.value);
};

watch(cities, saveCities, { immediate: true });
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
    <div v-if="cities.length === 0" class="v-error">No cities are selected</div>
    <template v-else>
      <WeatherView v-for="city in cities" :key="city.name" :city="city" />
    </template>
  </div>
  <div class="v-main v-list" v-else>
    <SettingsLayout :cities="cities" @add="add" />
  </div>
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
.v-error {
  padding-top: 50px;
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
