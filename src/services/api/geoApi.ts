import { get } from "./apiBase";
const PATH_URL = "geo/1.0/direct";
const CITY_LIMIT = 3;

const geoApi = {
  getCityList: (cityName: string) => {
    return get<Array<TCity>>(`${PATH_URL}?q=${cityName}&limit=${CITY_LIMIT}`);
  },
};

export default geoApi;
