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

<template>{{ weatherData?.city }}:{{ weatherData?.temperature }}</template>
