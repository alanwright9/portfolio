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
        v-for="(project, index) in projectsStore.projects"
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
import { useRouterStore } from '@/store/routerStore'

const cardDelay = 0.2;

export default {
  
  components: {
    ProjectsCard
  },

  setup: () => ({
    projectsStore: useProjectsStore(),
    routerStore: useRouterStore(),
    transition: '0.5s'
  }),

  mounted() {
    this.projectsStore.loadProjects()
  },

  unmounted() {
    this.projectsStore.unloadProjects()
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      setTimeout(() => {
        vm.displayProjects()
      }, 300)
    })
  },

  methods: {
    displayProjects() {
      const projectCards = document.querySelectorAll('.project-card')
      projectCards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show')
        }, this.routerStore.transition + index * cardDelay * 1000)
      })
    },
  }
}
</script>

<style scoped>

.project-card {
  opacity: 0;
  transform: translateX(100%) scale(50%);

  --bezier: cubic-bezier(0.68, -0.55, 0.265, 1.55);
  transition:
    opacity v-bind(transition) var(--bezier),
    transform v-bind(transition) var(--bezier);
}

.project-card.show {
  opacity: 1;
  transform: translateX(0%) scale(100%);
}

</style>