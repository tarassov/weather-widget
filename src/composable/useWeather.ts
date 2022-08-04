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
    weatherApi.getByCityMocked(city.value).then((data) => {
      console.log(data);
      weatherData.value = data;
      console.log(weatherData);
    });
  }

  watch(city, fetchWeatherData, { immediate: true });

  return {
    weatherData,
  };
}
