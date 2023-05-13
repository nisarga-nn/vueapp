import { createRouter, createWebHistory } from "vue-router";
import About from "@/views/About.vue";
import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";
import Dashboard from "@/views/Dashboard.vue"
import SignUp from "@/views/SignUp.vue"
import SignIn from "@/views/SignIn.vue"

const router = createRouter({
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      component: About,
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact,
    },
    {
      path: "/dashboard",
      name: "dashboard",
      component: Dashboard,
    },
    {
      path:"/sign-up",
      name:"signup",
      component:SignUp,
    },
    {
      path:"/sign-in",
      name:"signin",
      component:SignIn,
    }
  ],
});

export default router;
