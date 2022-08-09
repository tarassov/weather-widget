import weatherApi from "@/services/api/weatherApi";
import { createDOMCompilerError } from "@vue/compiler-dom";
import { ref, onMounted, onUnmounted, watch, type ComputedRef } from "vue";
import { useLoading } from "./useLoading";

export function useWeather(city: ComputedRef<TCity>) {
  const weatherData = ref<TWeatherData | null>(null);
  const currentCity = ref<TCity>(city.value);
  const error = ref<boolean>(false);
  const interval = ref<number>();

  async function fetchWeatherData(cityToFetch: TCity) {
    currentCity.value = cityToFetch;

    error.value = false;
    if (!cityToFetch) {
      error.value = true;
      return;
    }
    await weatherApi
      .getByCity(cityToFetch)
      .then((data) => {
        weatherData.value = { ...data, name: cityToFetch.name };
      })
      .catch((e) => {
        console.warn(e);
        error.value = true;
      });
  }
  const { loading, wrapper } = useLoading(fetchWeatherData);
  onMounted(() => {
    interval.value = setInterval(function () {
      fetchWeatherData(currentCity.value);
    }, 10000);
  });

  onUnmounted(() => {
    clearInterval(interval.value);
  });
  watch(city, wrapper, { immediate: true });

  return {
    loading,
    weatherData,
    error,
  };
}
