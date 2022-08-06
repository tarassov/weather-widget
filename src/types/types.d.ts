type TWeatherData = {
  base: string;
  coord: {
    lon: number;
    lat: number;
  };
  clouds: {
    all: number;
  };
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    description: string;
    icon: string;
    id: number;
    main: string;
  }>;
  sys: {
    type: number;
    id: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  visibility: number;
  dt: number;
  id: number;
  name: string;
  cod: number;
  timezone: number;
  wind: {
    deg: number;
    speed: number;
  };
};

type TCity = {
  id?: string;
  name: string;
  lat?: number;
  lon?: number;
  country?: string;
  state?: string;
  local_names?: { [key: string]: string };
  index?: number;
};
