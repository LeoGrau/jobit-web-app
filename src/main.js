import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";

//Saucy Icons
import "primeicons/primeicons.css";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//Styles
import "./assets/main.css";
import "primeflex/primeflex.css";

//Component imports
import Button from "primevue/button";
import Avatar from "primevue/avatar";
import Dialog from "primevue/dialog";
import Password from "primevue/password";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import InputNumber from "primevue/inputnumber";
import Divider from "primevue/divider";
import Steps from "primevue/steps";
import Toast from "primevue/toast";
import ConfirmationService from "primevue/confirmationservice";
import ToastService from "primevue/toastservice";
import DialogService from "primevue/dialogservice";
import Calendar from "primevue/calendar";
import Dropdown from "primevue/dropdown";
import FileUpload from "primevue/fileupload";
import TextArea from "primevue/textarea";

//Another free source
import CountryFlag from "vue-country-flag-next";

const app = createApp(App);

//Uses
app.use(PrimeVue, { ripple: true });
app.use(createPinia());
app.use(ConfirmationService);
app.use(ToastService);
app.use(DialogService);
app.use(router);

//Adding primevue components
app.component("pv-button", Button);
app.component("pv-avatar", Avatar);
app.component("pv-dialog", Dialog);
app.component("pv-password", Password);
app.component("pv-card", Card);
app.component("pv-input-text", InputText);
app.component("pv-input-number", InputNumber);
app.component("pv-divider", Divider);
app.component("pv-steps", Steps);
app.component("pv-toast", Toast);
app.component("pv-calendar", Calendar);
app.component("pv-dropdown", Dropdown);
app.component("pv-file-upload", FileUpload);
app.component("pv-text-area", TextArea);

//Adding other primevue components
app.component("country-flag", CountryFlag);

app.mount("#app");
