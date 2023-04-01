<template>
  <!-- size-lg will be 3 when more projects are added... -->
  <PageGrid size="1" size-md="2" size-lg="2">
    <PageGridItem v-for="project in jsonProjects">
      <ProjectsCard :data="project"/>
    </PageGridItem>
  </PageGrid>
</template>

<script setup>
import { PageGrid, PageGridItem } from '@/components/page'
import ProjectsCard from './ProjectsCard.vue'
import jsonProjects from '@/assets/json/projects.json'
</script>