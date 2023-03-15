<script setup>

function getImageURL(name) {
  return new URL(`../../../assets/img/social/${name}.svg`, import.meta.url).href
}

</script>

<template>
  <a v-bind:href=data.url target="_blank">
    <div class="link">
      <img v-bind:src="getImageURL(data.img)" alt="" />
      <h3>{{ data.name }}</h3>
    </div>
  </a>
</template>

<script>

export default {
  props: ['data']
}

</script>

<style scoped>

.link {
  display: flex;
  margin: 16px;
}

img {
  height: 24px;
}

h3 {
  margin-left: 8px;
  line-height: 24px;
}

@media (max-width: 1024px) {
  h3 {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  img {
    filter: invert(80%);
  }
}

</style>