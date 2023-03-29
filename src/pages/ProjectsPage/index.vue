<template>
  <PageContainer>
    <PageHeading>My Projects</PageHeading>
    <PageParagraph>
      The following items show off my coding expertise, which includes web development
      along with general programming and 2D animation. Each card contains a brief description
      of the project with a link to the source code. Feel free to check them out!
    </PageParagraph>
    <ProjectsGrid/>
  </PageContainer>
</template>

<script setup>
import { PageContainer, PageHeading, PageParagraph } from '@/components/page'
import ProjectsGrid from './ProjectsGrid.vue'
</script>