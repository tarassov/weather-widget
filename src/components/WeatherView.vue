<script setup lang="ts">
import { useWeather } from "@/composable/useWeather.js";
import { ref } from "vue";

interface Props {
  city: TCity;
}
const props = defineProps<Props>();

const city = ref<TCity>(props.city);

const { weatherData } = useWeather({ city });
</script>

<template>
  <div>
    <VButton label="Danger" class="p-button-rounded p-button-danger">
      this is button
    </VButton>
    <text-h6>{{ weatherData?.weather[0].description }}</text-h6>
  </div>
  {{ weatherData?.weather[0].description }}:{{ weatherData?.main.temp }}
</template>
