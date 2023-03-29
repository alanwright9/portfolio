<template>
  <PageContainer>
    <HomeTitle>Welcome! <span class="text-nowrap">I'm Alan</span></HomeTitle>
    <HomeSubtitle>I specialize in Front-End Web Development using Vue.js</HomeSubtitle>
    <hr class="m-4 m-md-5">
    <PageRightAlign>
      <AppButtonLg to="/projects" label="Check out my projects!"/>
    </PageRightAlign>
  </PageContainer>
</template>

<script setup>
import { PageContainer, PageRightAlign } from '@/components/page'
import { HomeTitle, HomeSubtitle } from '.'
import AppButtonLg from '@/components/ui/AppButtonLg.vue'
</script>