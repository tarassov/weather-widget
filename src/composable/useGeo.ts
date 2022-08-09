import geoApi from "@/services/api/geoApi";
import { ref } from "vue";
import { useLoading } from "./useLoading";

interface UseGeoProps {
  cityName: string;
}

export function useGeo() {
  const loading = ref(false);
  async function getCityAsync({
    cityName,
  }: UseGeoProps): Promise<Array<TCity>> {
    loading.value = true;
    const result = await geoApi.getCityList(cityName, 1);
    loading.value = false;
    return result;
  }

  return {
    loading,
    getCityAsync,
  };
}
