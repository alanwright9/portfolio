<script setup>

function getImageURL(name) {
  return new URL(`../../../assets/img/social/${name}.svg`, import.meta.url).href
}

</script>

<template>
  <a class="navlink" v-bind:href=data.url target="_blank">
      <img v-bind:src="getImageURL(data.img)" alt="" />
  </a>
</template>

<script>

export default {
  props: ['data']
}

</script>

<style scoped>

a {
  float: left;
  display: flex;
  padding: 0.5rem 1rem;
}

img {
  height: 24px;
}

@media (prefers-color-scheme: dark) {
  img {
    filter: invert(80%);
  }
}

</style>