import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projectsStore', {
  state: () => ({
    projects: []
  }),
  actions: {
    async loadProjects() {
      const imported = await import('../assets/json/projects.json')
      this.projects = imported.default
    },
    unloadProjects() {
      this.projects = []
    }
  }
})