import { defineCustomElement, createApp, ref } from "vue";

import WeatherWidget from "./components/WeatherWidget.vue";
import MainLayout from "./components/MainLayout.vue";
import WeatherView from "./components/WeatherView.vue";
import NewCityForm from "./components/NewCityForm.vue";
import SettingsLayout from "./components/SettingsLayout.vue";
import CityPreview from "./components/CityPreview.vue";
import tooltip from "primevue/tooltip";
WeatherWidget.styles = [
  ...WeatherWidget.styles,
  ...MainLayout.styles,
  ...WeatherView.styles,
  ...NewCityForm.styles,
  ...SettingsLayout.styles,
  ...CityPreview.styles,
];

const CustomElement = defineCustomElement(WeatherWidget);

customElements.define("weather-widget", CustomElement);
