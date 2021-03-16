import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/lista",
    name: "Lista",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Lista.vue")
  },
];

const router = new VueRouter({
  routes
});

export default router;
