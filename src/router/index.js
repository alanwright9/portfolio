import { createRouter, createWebHistory } from 'vue-router'
import { StringHelper } from './methods'
import jsonPages from './pages.json'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: []
})

for (var i = 0; i < jsonPages.length; i++) {
  const page = jsonPages[i]

  router.addRoute(
    {
      path: StringHelper.toPath(i, page.name),
      name: StringHelper.toDisplay(page.name),
      component: () => import(`../views/${page.name}View.vue`),
      meta: { id: i }
    })
}

export default router