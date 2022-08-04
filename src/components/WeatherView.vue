<script setup lang="ts">
import { useWeather } from "@/composable/useWeather.js";
import { ref } from "vue";
interface Props {
  city: TCity;
}
const props = defineProps<Props>();

const city = ref<TCity>(props.city);

const { loading, weatherData } = useWeather({ city });
</script>

<template>
  <div v-if="loading">
    <h4>{{ city.name }}</h4>
    <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
  </div>
  <div v-else>
    <h4>{{ weatherData?.name }}, {{ weatherData?.sys.country }}</h4>

    {{ weatherData?.weather[0].description }}:{{ weatherData?.main.temp }}
  </div>
</template>
