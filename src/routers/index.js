import { createRouter, createWebHistory } from "vue-router";
import CheckBluetooth from "../pages/CheckBluetooth.vue";
import CreateAccountPage from "../pages/CreateAccount.vue";
import FriendsMap from "../pages/FriendsMap.vue";
import LoginPage from "../pages/Login.vue";

const routes = [
  { path: "/liiv-arround/login", name: "Login", component: LoginPage },
  {
    path: "/liiv-arround/create-account",
    name: "CreateAccount",
    component: CreateAccountPage,
  },
  {
    path: "/liiv-arround/check-bluetooth",
    name: "CheckBluetooth",
    component: CheckBluetooth,
  },
  {
    path: "/liiv-arround/friends-map",
    name: "FriendsMap",
    component: FriendsMap,
  },
  { path: "/liiv-arround/", redirect: "/liiv-arround/login" },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
