<template>
  <a class="navlink" v-bind:href=data.url target="_blank">
      <img v-bind:src="getImageURL(data.img)" alt="" />
  </a>
</template>

<script>

export default {
  props: ['data'],

  methods: {
    getImageURL(name) {
      return new URL(`../../../assets/img/social/${name}.svg`, import.meta.url).href
    }
  }
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
  filter: invert(80%);
}

</style>