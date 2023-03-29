<template>
  <!--xl will be 3 when more projects are added...-->
  <div class="row row-cols-1 row-cols-md-2 row-cols-xl-2 g-5">
    <div class="col d-flex" v-for="project in jsonProjects">
      <ProjectsCard :data="project"/>
    </div>
  </div>
  <div style="height: 25vh" />
</template>

<script setup>
import ProjectsCard from './ProjectsCard.vue'
import jsonProjects from '@/assets/json/projects.json'
</script>