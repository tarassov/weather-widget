import { createApp } from "vue";
import App from "./components/App.vue";

import "./assets/main.css";

const weatherApp = createApp(App);

weatherApp.mount("#app");
