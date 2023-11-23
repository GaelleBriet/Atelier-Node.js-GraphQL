import { createApp } from "vue";
import { createPinia } from "pinia";
import { plugin, defaultConfig } from "@formkit/vue";
import config from "../formkit.config.ts";
import "@formkit/themes/genesis";
import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client/core";
import { DefaultApolloClient } from "@vue/apollo-composable";
import { setContext } from "@apollo/client/link/context";

import { useUserStore } from "./stores/userStore";
import { authService } from "./services/auth.service";

import App from "./App.vue";
import router from "./router/index.js";

// HTTP connection to the API
const httpLink = createHttpLink({
  // You should use an absolute URL here
  uri: "http://localhost:4005"
});
// Middleware that will add the header to the request
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      "content-type": "application/json",
      "x-apollo-operation-name": "ExampleQuery"
    }
  };
});
// Cache implementation
const cache = new InMemoryCache();
// Create the apollo client
const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(plugin, defaultConfig(config));
app.provide(DefaultApolloClient, apolloClient);

const userStore = useUserStore();
const token = await authService.login("admin@velo-cation.com", "secret");

userStore.setUser(token);

app.mount("#app");
