import { createApp } from "vue";
import { VueQueryPlugin } from "vue-query";
import router from "./router";
import App from "./App.vue";
import "./assets/scss/app.scss";

const app = createApp(App);
app.use(VueQueryPlugin);
app.use(router);
app.mount("#app");
