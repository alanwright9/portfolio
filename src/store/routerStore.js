import { defineStore } from 'pinia'

export const useRouterStore = defineStore('router', {
  state: () => ({
    route_id: $route.meta.id
  })
})