import { getCitiesByName, getWeatherByCityMock } from "@/services/api";
import { ref, watch, type Ref } from "vue";

interface UseGeoProps {
  cityName: string;
}

export function useGeo({ cityName }: UseGeoProps) {
  async function fetchCityList(): Promise<Array<TCity>> {
    return getCitiesByName(cityName).then((data) => data);
  }

  return {
    fetchCityList,
  };
}
