import { createRouter, createWebHistory } from "vue-router";
import lctMainWrapper from "../components/lct-main-wrapper";

const routes = [
  {
    path: "/",
    name: "home",
    component: lctMainWrapper,
  },
  {
    path: "/about",
    name: "about",
    component: lctMainWrapper,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
