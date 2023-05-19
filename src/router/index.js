import { createRouter, createWebHistory } from "vue-router";
import lctMainPage from "../components/main-page/lct-main-page";
import lctAnalyticsPage from "../components/analytics-page/lct-analytics-page";

const routes = [
  {
    path: "/",
    name: "mainPage",
    component: lctMainPage,
  },
  {
    path: "/analytics",
    name: "analyticsPage",
    component: lctAnalyticsPage,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
