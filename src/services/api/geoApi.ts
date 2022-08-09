import { get } from "./apiBase";
const PATH_URL = "geo/1.0/direct";
const DEFAULT_LIMIT = 3;

const geoApi = {
  getCityList: (cityName: string, limit?: number) => {
    return get<Array<TCity>>(
      `${PATH_URL}?q=${cityName}&limit=${limit || DEFAULT_LIMIT}`
    );
  },
};

export default geoApi;
