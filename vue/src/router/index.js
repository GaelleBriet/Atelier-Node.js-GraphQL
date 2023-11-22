import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/HomeView.vue";
import Rent from "../views/RentView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
    },
    {
      path: "/about",
      name: "about",
    },
    {
      path: "/location-start",
      name: "location-start",
      component: Rent,
    },
  ]
});

export default router;
