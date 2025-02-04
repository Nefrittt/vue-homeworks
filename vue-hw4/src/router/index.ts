import MainView from "@/views/MainView.vue"
import { createRouter, createWebHistory } from "vue-router"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "main",
      component: MainView,
    },
    {
      path: "/posts",
      name: "posts",
      component: () => import("@/views/PostsView.vue"),
    },
    {
      path: "/post/:id",
      name: "post",
      component: () => import("@/views/PostView.vue"),
    }
  ],
})

export default router
