type TWeatherData = {
  city: string;
  temperature: number;
};

type TCity = {
  id?: string;
  name: string;
  lat?: number;
  lon?: number;
  country?: string;
  state?: string;
  local_names?: { [key: string]: string };
};
