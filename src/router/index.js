import { createRouter, createWebHistory } from "vue-router";
import ToDoView from "../views/ToDoView.vue";

const routes = [
  {
    path: "/",
    name: "Todo",
    component: ToDoView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
