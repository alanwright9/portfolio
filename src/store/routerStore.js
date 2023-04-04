import { defineStore } from 'pinia'
import router from '@/router'

export const useRouterStore = defineStore('routerStore', {
  state: () => ({
    routeId: undefined,
    fadeIn: 0.5,
    transition: 0.3
  })
})

router.beforeEach((to, from) => {
  const routerStore = useRouterStore()
  routerStore.routeId = to.meta.id;
})