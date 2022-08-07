<script setup lang="ts">
import { useWeather } from "@/composable/useWeather.js";
import weatherApi from "@/services/api/weatherApi.js";
import { computed } from "vue";
type TWeatherViewProps = {
  city: TCity;
};
const props = defineProps<TWeatherViewProps>();

const city = computed(() => props.city);

const imgUrl = computed(() => {
  const imgCode = weatherData.value?.weather[0].icon;
  return imgCode ? weatherApi.getImageLink(imgCode) : "";
});

const description = computed(() => {
  const result =
    weatherData.value?.weather[0].description.replace(/(^\w{1})/g, (letter) =>
      letter.toUpperCase()
    ) + ".";
  return result;
});

const { loading, weatherData, error } = useWeather(city);
</script>

<template>
  <div class="weather-container">
    <div v-if="error" class="weather-error">Server error.</div>
    <template v-else>
      <div v-if="loading">
        <div class="weather-header">
          <h4>{{ city.name }}</h4>
        </div>
        <i class="pi pi-spin pi-spinner" style="font-size: 2rem"></i>
      </div>
      <div v-else>
        <div class="weather-header">
          <h4>{{ weatherData?.name }}, {{ weatherData?.sys.country }}</h4>
        </div>
        <div class="weather-image">
          <img :src="imgUrl" :alt="description" />
          <h2>{{ weatherData?.main.temp }}&deg;C</h2>
        </div>
        <div class="weather-description">
          {{ description }}
        </div>
      </div>
    </template>
  </div>
</template>

<style lang="scss" scoped>
.weather-container {
  height: 150px;
  background-color: var(--v-card-color);
  border-radius: 20px;
  margin: 0px 5px 10px;
  box-shadow: 2px 2px 1px rgb(181, 181, 179);
}
.weather-header {
  padding-left: 10px;
  text-align: left;
}
.weather-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 10px 10px 20px;
}
.weather-image img {
  width: 48px;
  height: 48px;
}
.weather-image h2 {
  padding: 5px;
  display: inline;
}

.weather-description {
  text-align: left;
  padding-left: 10px;
}
</style>
