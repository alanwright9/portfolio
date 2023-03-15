<script setup>
import SocialLink from './SocialLink.vue'
import jsonSocials from '@/assets/json/social-links.json'
</script>

<template>
  <div class="socials_wrapper">
    <SocialLink v-for="social in jsonSocials" v-bind:data=social />
  </div>
</template>

<style scoped>

.socials_wrapper {
  display: flex;
  margin-left: 1rem;
}

</style>