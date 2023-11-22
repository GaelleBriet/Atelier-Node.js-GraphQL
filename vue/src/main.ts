import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config.ts";
import "@formkit/themes/genesis";

import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));

app.mount("#app");
