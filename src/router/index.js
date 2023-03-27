import { createRouter, createWebHashHistory } from 'vue-router'
import StringHelper from '@/scripts/stringhelper'
import RouterDefaults from '@/scripts/routerdefaults'
import jsonRoutes from './routes.json'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [],
  scrollBehavior(to, from) {
    if (to != from) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: "instant" })
        }, RouterDefaults.transition * 1000)
      })
    }
  }
})

for (var i = 0; i < jsonRoutes.length; i++) {
  const page = jsonRoutes[i]

  router.addRoute({
    path: StringHelper.toPath(i, page.name),
    name: StringHelper.toDisplay(page.name),
    component: () => import(`../views/${page.name}View.vue`),
    meta: { id: i }
  })
}

export default router