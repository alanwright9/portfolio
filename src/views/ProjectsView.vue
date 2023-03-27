<template>
  <div>
    <div class="container-fluid">

      <div class="row mb-3 mb-md-4">
        <h1 class="display-4">My Projects</h1>
      </div>
      
      <div class="row mb-5">
        <div class="col col-lg-8">
          <p class="fs-5 text-white text-opacity-75">
            The following items show off my coding expertise, which includes web development
            along with general programming and 2D animation. Each card contains a brief description
            of the project with a link to the source code. Feel free to check them out!
          </p>
        </div>
      </div>

    </div>

    <div class="container-fluid">
      <!--xl will be 3 when more projects are added...-->
      <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-5">
        <div class="col d-flex" v-for="project in jsonProjects">
          <ProjectsCard :data="project"/>
        </div>
      </div>
      <div style="height: 25vh" />
    </div>
    
  </div>
</template>

<script>
import ProjectsCard from './components/ProjectsCard.vue'
import jsonProjects from '@/assets/json/projects.json'

export default {
  components: {
    ProjectsCard
  },
  setup: () => ({
    jsonProjects
  })
}
</script>