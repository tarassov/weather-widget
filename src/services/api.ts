const API_URL = "https://api.openweathermap.org/";
const API_KEY = "24c0783ea632e644f853e0a65989b09a";
const CITY_LIMIT = 3;

export const getWeatherByCity = (city: string): Promise<TWeatherData> => {
  return fetch(API_URL + `data/2.5/weather?q=${city}&appid=${API_KEY}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<TWeatherData>;
    })
    .then((data) => {
      return data;
    });
};

export const getCitiesByName = (city: string): Promise<Array<TCity>> => {
  return fetch(
    API_URL + `geo/1.0/direct?q=${city}&limit=${CITY_LIMIT}&appid=${API_KEY}`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json() as Promise<Array<TCity>>;
    })
    .then((data) => {
      return data;
    });
};

export const getWeatherByCityMock = (city: string): Promise<TWeatherData> => {
  return new Promise((resolve) => {
    console.log(`${Date.now()} - sent request`);

    setTimeout(() => {
      const data = { city: city, temperature: Math.random() * 100 };
      console.log(`${Date.now()} - response: ${data.city}`);
      resolve(data);
    }, 1500);
  });
};
