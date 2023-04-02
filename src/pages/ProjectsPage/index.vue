<template>
  <PageBody>
    <PageH>My Projects</PageH>
    <PageBodyP>
      The following items show off my coding expertise, which includes web development
      along with general programming and 2D animation. Each card contains a brief description
      of the project with a link to the source code and/or demonstration. Feel free to check them out!
    </PageBodyP>
    <PageGrid size="1" size-md="2" size-lg="2">
      <PageCol v-for="project in jsonProjects">
        <ProjectsCard :data="project"/>
      </PageCol>
    </PageGrid>
  </PageBody>
</template>

<script setup>
import ProjectsCard from './ProjectsCard.vue'
import jsonProjects from '@/assets/json/projects.json'
</script>