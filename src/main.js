import { createApp } from "vue";
import App from "./App.vue";
import "./css/global.css";
import router from "./routers/index.ts";
// import message from "./utils/message";

createApp(App).use(router).mount("#app");
