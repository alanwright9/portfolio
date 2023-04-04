import { defineStore } from 'pinia'
import { assetURL } from '@/scripts'

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: []
  }),
  actions: {
    async loadProjects() {
      const imported = await import('../assets/json/projects.json')
      //const response = await fetch(assetURL('projects.json', 'json'))
      //const projects = await response.json()
      this.projects = imported.default
    },
    unloadProjects() {
      this.projects = []
    }
  }
})