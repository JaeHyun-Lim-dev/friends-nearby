import { createRouter, createWebHistory } from "vue-router";
import CreateAccountPage from "../pages/CreateAccount.vue";
import LoginPage from "../pages/Login.vue";

const routes = [
  // { path: "/", redirect: { path: "/login" } },
  { path: "/login", component: LoginPage },
  { path: "/create-account", component: CreateAccountPage },
];

const router = createRouter({ history: createWebHistory(), routes });

export default router;
