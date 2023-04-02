<template>
  <div>
    <a class="p-3 pb-4" v-for="social in jsonSocials" :href=social.url target="_blank">
      <AppIconSm :img=social.img />
    </a>
  </div>
</template>

<script setup>
import { AppIconSm } from '@ui'
import jsonSocials from '@/assets/json/social-links.json'
</script>