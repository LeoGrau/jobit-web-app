import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Saucy Icons
import "primeicons/primeicons.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Component imports
import Button from "primevue/button";
import Avatar from "primevue/avatar";

//Styles
import "./assets/main.css";
import "primeflex/primeflex.css";

const app = createApp(App);

//Uses
app.use(PrimeVue, { ripple: true });
app.use(createPinia());
app.use(router);

//Adding primevue components
app.component("pv-toolbar", Button);
app.component("pv-avatar", Avatar);

app.mount("#app");
