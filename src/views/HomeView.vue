<script setup>
import RouterButton from '../components/MainWrapper/RouterButton.vue'
</script>

<template>
  <div class="main_left">
    <h1>Welcome! I'm Alan</h1>
    <h2>I specialize in Front-End Web Development using Vue.js</h2>
  </div>
  <hr>
  <div class="main_right">
    <RouterButton to="/projects" label="Check out my projects!"/>
  </div>
</template>