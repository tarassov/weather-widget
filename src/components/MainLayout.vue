<script setup lang="ts">
import { ref, computed, onMounted, provide, watchEffect } from "vue";
import WeatherView from "./WeatherView.vue";
import SettingsLayout from "./SettingsLayout.vue";
import { useSettings } from "@/composable/useSettings";
import { CityKey } from "@/symbols";
import NewCityForm from "./NewCityForm.vue";
const settingsMode = ref(false);

const cities = ref<Array<TCity>>([]);
const loaded = ref(false);

const { getValue, setValue } = useSettings();

const toggleMenu = () => {
  settingsMode.value = !settingsMode.value;
};

const menuIcon = computed(() => {
  return `pi ${settingsMode.value ? "pi-times" : "pi-cog"}`;
});

onMounted(() => {
  const savedCities = getValue<Array<TCity>>("cities");
  if (savedCities) {
    cities.value = savedCities;
  }
  loaded.value = true;
});

const add = (city: TCity) => {
  cities.value?.push(city);
};

const removeCity = (index: number) => {
  cities.value?.splice(index, 1);
};

watchEffect(() => {
  if (loaded.value) setValue("cities", cities.value);
});

provide(CityKey, { onRemove: removeCity, onAdd: add });
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
    <div v-if="!cities || cities.length === 0" class="v-error">
      No cities are selected
      <NewCityForm />
    </div>
    <template v-else>
      <WeatherView v-for="city in cities" :key="city.name" :city="city" />
    </template>
  </div>
  <div class="v-main" v-else>
    <SettingsLayout :cities="cities" />
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
  // max-height: 500px;
}
.v-error {
  padding-top: 50px;
}
.v-list {
  max-height: -webkit-calc(100vh - 30px);
  max-height: -moz-calc(100vh - 30px);
  max-height: calc(100vh - 30px);
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
