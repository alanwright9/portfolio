<template>
  <PageBody>
    <PageH>My Projects</PageH>
    <PageBodyP>
      The following items show off my coding expertise, which includes web development
      along with general programming and 2D animation. Each card contains a brief description
      of the project with a link to the source code and/or demonstration. Feel free to check them out!
    </PageBodyP>
    <div class="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-5">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="col project-card"
      >
        <ProjectsCard :data="project"/>
      </div>
    </div>
  </PageBody>
</template>

<script>
import ProjectsCard from './ProjectsCard.vue'
import { useProjectsStore } from '@/store/projects'

export default {
  
  components: {
    ProjectsCard
  },

  data: () => ({
    projects: []
  }),

  setup: () => ({
    projectsStore: useProjectsStore(),
    cardDelay: 0.15,
    transition: '0.7s'
  }),

  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => {
        vm.loadProjects()
      }, 300)
    })
  },

  methods: {

    async loadProjects() {
      this.projectsStore.projects.forEach((project, index) => {
        setTimeout(() => {this.projects.push(project)}, index * this.cardDelay * 1000)
      })
    },

    unloadProjects() {
      this.projects.length = 0
    }
  }
}
</script>

<style scoped>

.project-card {
  animation-name: fade-in;
  animation-duration: v-bind(transition);
  animation-timing-function: cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateX(100%) scale(50%);
  }
  100% {
    opacity: 1;
    transform: translateX(0%) scale(100%);
  }
}

</style>