import weatherApi from "@/services/api/weatherApi";
import { ref, watch, type Ref } from "vue";

interface UseWeatherProps {
  city: Ref<TCity>;
}

export function useWeather({ city }: UseWeatherProps) {
  const weatherData = ref<TWeatherData | null>(null);

  async function fetchWeatherData(): Promise<void> {
    weatherData.value = null;
    if (!city) return;
    weatherApi.getByCity(city.value).then((data) => (weatherData.value = data));
  }

  watch(city, fetchWeatherData, { immediate: true });

  return {
    weatherData,
  };
}
