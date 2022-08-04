import weatherApi from "@/services/api/weatherApi";
import { ref, watch, type Ref } from "vue";
import { useLoading } from "./useLoading";

interface UseWeatherProps {
  city: Ref<TCity>;
}

export function useWeather({ city }: UseWeatherProps) {
  const weatherData = ref<TWeatherData | null>(null);

  async function fetchWeatherData() {
    weatherData.value = null;
    if (!city) return;
    await weatherApi
      .getByCityMocked(city.value)
      .then((data) => (weatherData.value = data));
  }
  const { loading, wrapper } = useLoading(fetchWeatherData);
  watch(city, wrapper, { immediate: true });

  return {
    loading,
    weatherData,
  };
}
