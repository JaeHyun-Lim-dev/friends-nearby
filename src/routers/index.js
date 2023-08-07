import { createRouter, createWebHistory } from "vue-router";
import CheckBluetooth from "../pages/CheckBluetooth.vue";
import CreateAccountPage from "../pages/CreateAccount.vue";
import FriendsMap from "../pages/FriendsMap.vue";
import LoginPage from "../pages/Login.vue";

const routes = [
  { path: "/friends-nearby/login", name: "Login", component: LoginPage },
  {
    path: "/friends-nearby/create-account",
    name: "CreateAccount",
    component: CreateAccountPage,
  },
  {
    path: "/friends-nearby/check-bluetooth",
    name: "CheckBluetooth",
    component: CheckBluetooth,
  },
  {
    path: "/friends-nearby/friends-map",
    name: "FriendsMap",
    component: FriendsMap,
  },
  { path: "/friends-nearby/", redirect: "/friends-nearby/login" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
