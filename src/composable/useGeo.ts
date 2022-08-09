import geoApi from "@/services/api/geoApi";
import { ref } from "vue";
import { useLoading } from "./useLoading";

interface UseGeoProps {
  cityName: string;
  limit: number;
}

export function useGeo() {
  const loading = ref(false);
  async function getCityAsync({
    cityName,
    limit,
  }: UseGeoProps): Promise<Array<TCity>> {
    loading.value = true;
    const result = await geoApi.getCityList(cityName, limit);
    loading.value = false;
    return result;
  }

  return {
    loading,
    getCityAsync,
  };
}
