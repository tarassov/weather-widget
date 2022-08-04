import { getCitiesByName, getWeatherByCityMock } from "@/services/api";

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
