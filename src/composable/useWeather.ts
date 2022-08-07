import weatherApi from "@/services/api/weatherApi";
import { ref, watch, type ComputedRef } from "vue";
import { useLoading } from "./useLoading";

export function useWeather(city: ComputedRef<TCity>) {
  const weatherData = ref<TWeatherData | null>(null);
  const error = ref<boolean>(false);

  async function fetchWeatherData(cityToFetch: TCity) {
    weatherData.value = null;
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
  watch(city, wrapper, { immediate: true });

  return {
    loading,
    weatherData,
    error,
  };
}
