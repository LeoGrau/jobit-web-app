import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../jobit/pages/home-view.vue";
import LoginView from "../jobit/pages/login-view.vue";
import ApplicantProfileView from "../jobit/pages/applicant-profile-view.vue";
import PageNotFound from "../jobit/pages/page-not-found.vue";
import RegisterView from "../jobit/pages/register-view.vue";
import SketchToDelete from "../jobit/pages/sketch-to-delete.vue";
//Subviews
import PersonalInfoSubview from "../jobit/pages/register/personal-info.vue";
import ProfessionalInfoSubview from "../jobit/pages/register/professional-info.vue";
import SocialInfoSubView from "../jobit/pages/register/social-info.vue";

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
          component: PersonalInfoSubview,
        },
        {
          path: "professional-info",
          name: "professional information",
          component: ProfessionalInfoSubview,
        },
        {
          path: "social-info",
          name: "social information",
          component: SocialInfoSubView,
        },
      ],
    },
    {
      path: "/applicant-profile/:id",
      name: "applicant-profile",
      component: ApplicantProfileView,
    },
    {
      path: "/sketch",
      name: "sketch",
      component: SketchToDelete,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "error",
      component: PageNotFound,
    },
  ],
});

export default router;
