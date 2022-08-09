<script setup lang="ts">
import { useWeather } from "@/composable/useWeather.js";
import weatherApi from "@/services/api/weatherApi.js";
import { getWindDirection, getWindTypeBySpeed } from "@/services/utils";
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
  const feelsLike = `Feels like ${weatherData.value?.main.feels_like}\u00B0C`;
  const textDescription = weatherData.value?.weather[0].description.replace(
    /(^\w{1})/g,
    (letter) => letter.toUpperCase()
  );
  const findText = getWindTypeBySpeed(weatherData.value?.wind.speed);
  const result = `${feelsLike}. ${textDescription}. ${findText}.`;
  return result;
});

const windStyle = computed(() => {
  return `transform: rotate(${weatherData.value?.wind.deg}deg)`;
});
const windDescription = computed(() => {
  return `${weatherData.value?.wind.speed}m/s ${getWindDirection(
    weatherData.value?.wind.deg
  )}`;
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
        <div class="weather-details">
          <div class="weather-details-item">
            <i class="pi pi-arrow-up" :style="windStyle" />
            {{ windDescription }}
          </div>

          <div class="weather-details-item">
            <i class="pi pi-clock" :style="windStyle" />
            {{ weatherData?.main.pressure }}hPa
          </div>
        </div>
        <div class="weather-details" v-show="weatherData">
          <div class="weather-details-item">
            <i class="pi pi-compass" :style="windStyle" />
            Humidity: {{ weatherData?.main.humidity }}%
          </div>

          <div class="weather-details-item">
            <i class="pi pi-eye" />
            Visibility: {{ (weatherData?.visibility || 0) / 1000 }}km
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<style scoped>
.weather-container {
  height: 250px;
  background-color: var(--v-card-color);
  border-radius: 20px;
  margin: 0px 5px 10px;
  box-shadow: 2px 2px 1px rgb(181, 181, 179);
}
.weather-header {
  padding: 10px;
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
.weather-details {
  margin-top: 10px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.weather-details-item {
  width: 112px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: center;
  margin-left: 5px;
  margin-right: 5px;
  font-size: 10pt;
}
.weather-details-item i {
  margin-right: 5px;
}
</style>
