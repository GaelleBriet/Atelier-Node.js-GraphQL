import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import StartRent from "../views/StartRentView.vue";
import EndRent from "../views/EndRentView.vue";
import Bike from "../views/BikeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/bikes",
      name: "bikes",
      component: Bike
    },
    {
      path: "/location-start",
      name: "location-start",
      component: StartRent
    },
    {
      path: "/location-end",
      name: "location-end",
      component: EndRent
    }
  ]
});

export default router;
