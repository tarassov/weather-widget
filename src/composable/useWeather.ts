import weatherApi from "@/services/api/weatherApi";
import { ref, watch, type Ref } from "vue";
import { useLoading } from "./useLoading";

interface UseWeatherProps {
  city: TCity;
}

export function useWeather({ city }: UseWeatherProps) {
  const weatherData = ref<TWeatherData | null>(null);
  const error = ref<boolean>(false);

  async function fetchWeatherData() {
    weatherData.value = null;
    error.value = false;
    if (!city) return;
    await weatherApi
      .getByCity(city)
      .then((data) => (weatherData.value = data))
      .catch((e) => {
        console.log(e);
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
