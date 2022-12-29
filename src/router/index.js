import { createRouter, createWebHistory } from "vue-router";

import HomeView from "../jobit/pages/home-view.vue";
import ApplicantProfileView from "../jobit/pages/applicant-profile-view.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/home",
      name: "home",
      component: HomeView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
    {
      path: "/applicant-profile/:id",
      name: "applicant-profile",
      component: ApplicantProfileView,
    },
  ],
});

export default router;