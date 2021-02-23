import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/settings",
    name: "Settings",
    component: () => import("../views/Settings.vue")
  },
  {
    path: "/editor",
    name: "ArticleCreate",
    component: () => import("../views/ArticleCreate.vue")
  },
  {
    path: "/editor/:article-slug-here",
    name: "ArticleEdit",
    component: () => import("../views/ArticleEdit.vue")
  },
  {
    path: "/article/:article-slug-here",
    name: "Article",
    component: () => import("../views/Article.vue")
  },
  {
    path: "/:username",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/:username/favorites",
    name: "Favourites",
    component: () => import("../views/Favourites.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
