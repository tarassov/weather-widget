import { createApp } from "vue";
import App from "./components/App.vue";
import PrimeVue from "primevue/config";
import Button from "primevue/button";
import "./assets/main.css";

import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);
app.use(PrimeVue);

app.component("VButton", Button);

app.mount("#app");
