<script setup>
import Socials from './Profile/Socials.vue'
import jsonProfile from '../../assets/json/profile.json'

const imgSize = 128
</script>

<template>
  <img alt="Profile Pic" class="profile_img" src="@/assets/img/profile.png" :width="imgSize" :height="imgSize" />
  <div class="profile_wrapper">
    <div class="profile_item">
      <h1>{{ jsonProfile.name }}</h1>
      <h3>{{ jsonProfile.job }}</h3>
    </div>
    <div class="profile_item">
      <Socials />
    </div>
  </div>
</template>

<style scoped>

h1 {
  font-weight: 500;
  font-size: 2rem;
}

h3 {
  font-size: 1.2rem;
}

.profile_img {
  display: block;
  float: left;
  margin: 0 var(--pad);
}

.profile_wrapper {
  display: flex;
  flex-wrap: wrap;
}

.profile_item {
  float: left;
  white-space: nowrap;
}

</style>
