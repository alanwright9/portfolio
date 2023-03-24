import { createRouter, createWebHashHistory } from 'vue-router'
import { StringHelper } from '@/scripts/stringhelper'
import jsonRoutes from './routes.json'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: []
})

for (var i = 0; i < jsonRoutes.length; i++) {
  const page = jsonRoutes[i]

  router.addRoute(
    {
      path: StringHelper.toPath(i, page.name),
      name: StringHelper.toDisplay(page.name),
      component: () => import(`../views/${page.name}View.vue`),
      mode: "hash",
      meta: { id: i }
    })
}

export default router