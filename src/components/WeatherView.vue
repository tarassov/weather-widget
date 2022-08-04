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
    <q-btn label="Do something" />
    <q-icon name="alarm" />
    <text-h6>{{ weatherData?.weather[0].description }}</text-h6>
  </div>
  <div><div v-ripple>Click Me</div></div>
  > {{ weatherData?.weather[0].description }}:{{ weatherData?.main.temp }}
</template>
