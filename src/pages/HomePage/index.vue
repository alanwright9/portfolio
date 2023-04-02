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
import { AppButtonLg }                  from '@ui'

import HomeTitle    from './HomeTitle.vue'
import HomeSubtitle from './HomeSubtitle.vue'
</script>