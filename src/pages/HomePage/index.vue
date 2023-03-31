<template>
  <PageBody>
    <HomeTitle>Welcome! <span class="text-nowrap">I'm Alan</span></HomeTitle>
    <HomeSubtitle>I specialize in Front-End Web Development using Vue.js</HomeSubtitle>
    <PageHR/>
    <PageRAlign>
      <AppButtonLg to="/projects" label="Check out my projects!"/>
    </PageRAlign>
  </PageBody>
</template>

<script setup>
import { PageBody, PageRAlign, PageHR } from '@/components/page'
import { AppButtonLg }                  from '@/components/ui'

import HomeTitle    from './HomeTitle.vue'
import HomeSubtitle from './HomeSubtitle.vue'
</script>