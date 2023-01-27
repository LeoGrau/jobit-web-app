import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../jobit/pages/home-view.vue";
import LoginView from "../jobit/pages/login-view.vue";
import ApplicantProfileView from "../jobit/pages/applicant-profile-view.vue";
import PageNotFound from "../jobit/pages/page-not-found.vue";
import RegisterView from "../jobit/pages/register-view.vue";
//Subviews
import PersonalInfo from "../jobit/pages/register/personal-info.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
      children: [
        {
          path: "",
          name: "personal information",
          component: PersonalInfo,
        },
      ],
    },
    {
      path: "/applicant-profile/:id",
      name: "applicant-profile",
      component: ApplicantProfileView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: PageNotFound,
    },
  ],
});

export default router;
