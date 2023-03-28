<template>
  <div>
    <div class="text-start">
      <h1 class="display-1">Welcome! <span class="text-nowrap">I'm Alan</span></h1>
      <p class="fs-2">I specialize in Front-End Web Development using Vue.js</p>
    </div>
    <hr class="m-4 m-md-5">
    <div class="text-end">
      <AppButtonLg to="/projects" label="Check out my projects!"/>
    </div>
  </div>
</template>

<script setup>
import AppButtonLg from '@/components/ui/AppButtonLg.vue'
</script>