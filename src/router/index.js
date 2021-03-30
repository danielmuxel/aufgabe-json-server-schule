import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import News from "../views/News.vue";
import NewsArticle from "../views/NewsArticle.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/aktuelles",
    name: "News",
    component: News,
  },
  {
    path: "/aktuelles/:id",
    name: "NewsArticle",
    component: NewsArticle,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
