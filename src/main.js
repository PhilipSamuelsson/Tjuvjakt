import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "/main.css";
import "bootstrap/dist/css/bootstrap.css";

import bootstrap from "bootstrap/dist/js/bootstrap.bundle.js";
import store from './store'
const app = createApp(App);
app.use(store);
app.use(router);
app.use(bootstrap);
app.mount("#app");
