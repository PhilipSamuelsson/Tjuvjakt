import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/ProfileView.vue";
import ProductsView from "../views/ProductsView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import TestProductsView from "../views/TestProductsView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/profile",
      name: "profile",
      component: ProfileView,
    },
    {
      path: "/products",
      name: "products",
      component: ProductsView,
    },
    {
      path: "/testproducts",
      name: "testproducts",
      component: TestProductsView,
    },
    {
      path: "/testproducts/:productID",
      name: "productdetail",
      component: ProductDetailView
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
  ],
});

export default router;
