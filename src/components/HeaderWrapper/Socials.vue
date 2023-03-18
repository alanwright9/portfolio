<script setup>
import SocialLink from './Socials/SocialLink.vue'
import jsonSocials from '@/assets/json/social-links.json'
</script>

<template>
  <div>
    <SocialLink v-for="social in jsonSocials" v-bind:data=social />
  </div>
</template>