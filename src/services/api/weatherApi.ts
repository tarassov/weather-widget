import { get } from "./apiBase";
import { londonWeather } from "./mockedWeather";
const PATH_URL = "data/2.5/weather";
const IMAGE_URL = "https://openweathermap.org";

const weatherApi = {
  getByCity: (city: TCity) => {
    return get<TWeatherData>(`${PATH_URL}?q=${city.name}&units=metric`);
  },
  getByCityMocked: (city: TCity) => {
    return new Promise<TWeatherData>((resolve, reject) => {
      setTimeout(() => resolve(londonWeather), 1500);
    });
  },

  getImageLink: (code: string): string => {
    return `${IMAGE_URL}/img/wn/${code}.png`;
  },
};

export default weatherApi;
