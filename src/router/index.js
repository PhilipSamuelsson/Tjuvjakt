import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import ProfileView from "../views/ProfileView.vue";
import CheckoutView from "../views/CheckoutView.vue";
import ProductsView from "../views/ProductsView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import CheckoutViewSecond from "../views/CheckoutViewSecond.vue";
import CheckoutViewThird from "../views/CheckoutViewThird.vue";
import CheckoutViewFourth from "../views/CheckoutViewFourth.vue";
import SummaryView from "../views/SummaryView.vue";

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
      path: "/products/:productID",
      name: "productdetail",
      component: ProductDetailView,
    },
    {
      path: "/checkout",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/checkoutsecond",
      name: "checkoutsecond",
      component: CheckoutViewSecond,
    },
    {
      path: "/checkoutThird",
      name: "checkoutThird",
      component: CheckoutViewThird,
    },
    {
      path: "/checkoutfourth",
      name: "/checkoutfourth",
      component: CheckoutViewFourth,
    },
    {
      path: "/summary",
      name: "Summering",
      component: SummaryView,
    },
  ],
});

export default router;
