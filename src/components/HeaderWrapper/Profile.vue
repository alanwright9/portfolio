<template>
  <div>
    <h5 class="my-0">{{ jsonProfile.name }}</h5>
    <p class="d-none d-lg-inline">{{ jsonProfile.job }}</p>
  </div>
</template>

<script setup>
import jsonProfile from '../../assets/json/profile.json'
</script>