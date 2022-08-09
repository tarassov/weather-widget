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
  if (city) cities.value?.push(city);
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
  <div class="v-container">
    <div class="v-menu">
      <PiButton
        :icon="menuIcon"
        class="p-button-rounded p-button-text p-button-plain"
        @click="toggleMenu"
        ><mdi:cog
      /></PiButton>
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
  </div>
</template>

<style scoped>
@import "primeicons/primeicons.css";
.v-container {
  width: 350px;
  margin: 0 auto;
  height: 100%;
}

.v-menu {
  position: absolute;
  right: 0px;
  z-index: 3;
}

.v-main {
  max-height: inherit;
  height: 100%;
  text-align: center;
  background-color: white;
  color: var(--text-color);
}

.v-error {
  padding-top: 50px;
}

.v-list {
  max-height: calc(100%-100px);
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
