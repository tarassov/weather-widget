import { createApp } from "vue";
import App from "./components/App.vue";
import { Quasar } from "quasar";

import "./assets/main.css";

const weatherApp = createApp(App);

weatherApp.use(Quasar, {
  plugins: {}, // import Quasar plugins and add here
});

weatherApp.mount("#app");
