import { defineCustomElement } from "vue";

import WeatherWidget from "./components/WeatherWidget.vue";
import MainLayout from "./components/MainLayout.vue";
import WeatherView from "./components/WeatherView.vue";
import NewCityForm from "./components/NewCityForm.vue";
import SettingsLayout from "./components/SettingsLayout.vue";
import CityPreview from "./components/CityPreview.vue";
import Spinner from "./components/Spinner.vue";
import CitySuggestion from "./components/CitySuggestion.vue";

WeatherWidget.styles = [
  ...WeatherWidget.styles,
  ...MainLayout.styles,
  ...WeatherView.styles,
  ...NewCityForm.styles,
  ...SettingsLayout.styles,
  ...CityPreview.styles,
  ...Spinner.styles,
  ...CitySuggestion.styles,
];

const CustomElement = defineCustomElement(WeatherWidget);

customElements.define("weather-widget", CustomElement);
