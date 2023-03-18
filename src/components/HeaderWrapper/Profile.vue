<template>
  <div>
    <h3>{{ jsonProfile.name }}</h3>
    <p class="desktop">{{ jsonProfile.job }}</p>
  </div>
</template>

<script setup>
import jsonProfile from '../../assets/json/profile.json'
</script>

<style scoped>

h3 {
  font-size: 1.2rem;
  margin: auto 0;
}

</style>
