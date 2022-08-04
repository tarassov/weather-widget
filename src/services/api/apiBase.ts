import axios, { AxiosError, type AxiosResponse } from "axios";
const BASE_URL = "https://api.openweathermap.org/";
const API_KEY = "24c0783ea632e644f853e0a65989b09a";
axios.defaults.baseURL = BASE_URL;

const instance = axios.create({
  baseURL: BASE_URL,
});

const checkSuccess = (response: AxiosResponse) => {
  return response.status === 200
    ? response.data
    : Promise.reject(response.data);
};

const handleErrors = (e: AxiosError) => {
  if (e.response) {
    throw e.response?.data;
  } else {
    throw "Unknown error";
  }
};

export const get = <ResponseType>(endpoint: string): Promise<ResponseType> => {
  return instance
    .get<ResponseType>(`${endpoint}&appid=${API_KEY}`, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(checkSuccess)
    .catch(handleErrors);
};

export default instance;
