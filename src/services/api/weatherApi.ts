import { get } from "./apiBase";
const PATH_URL = "data/2.5/weather";

const weatherApi = {
  getByCity: (city: TCity) => {
    return get<TWeatherData>(`${PATH_URL}?q=${city.name}`);
  },
};

export default weatherApi;
