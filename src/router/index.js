import { createRouter, createWebHashHistory } from 'vue-router'
import { StringHelper } from '@/scripts'
import { useRouterStore } from '@/store/routerStore'
import jsonRoutes from './routes.json'

// Setup the main router
const router = createRouter({

  // Currently github hates non-hash, so we hash
  history: createWebHashHistory(import.meta.env.BASE_URL),

  // Routes will be filled in
  routes: [],

  // Set the scroll behavior to scroll to the top of the page post-transition
  scrollBehavior(to, from) {
    // Only if we did not (re)load the page or click on the same route,
    if (from.name && to != from) {
      return new Promise((resolve) => {
        // scroll to top once specified transition converted from s to ms is finished
        setTimeout(() => {
          resolve({ left: 0, top: 0, behavior: "instant" })
        }, useRouterStore().transition * 1000)
      })
    }
  }
})

// Add routes from our json file and automatically assign meta ids
for (const i in jsonRoutes) {
  const page = jsonRoutes[i];
  router.addRoute({
    path: StringHelper.toPath(i, page.name),
    name: StringHelper.toDisplay(page.name),
    component: () => import(
        `../pages/${page.name}Page.vue`
      ).catch(() => import(
        `../pages/${page.name}Page/index.vue`
      )),
    meta: { id: parseInt(i, 10) }
  })
}

export default router