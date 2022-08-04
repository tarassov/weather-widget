import { get } from "./apiBase";
import { londonWeather } from "./mockedWeather";
const PATH_URL = "data/2.5/weather";

const weatherApi = {
  getByCity: (city: TCity) => {
    return get<TWeatherData>(`${PATH_URL}?q=${city.name}`);
  },
  getByCityMocked: (city: TCity) => {
    return new Promise<TWeatherData>((resolve, reject) => {
      resolve(londonWeather);
    });
  },
};

export default weatherApi;
