<template>
  <a :href="url">
    <img :src="assetURL(`${image}.svg`, 'icons')">
  </a>
</template>

<script>
import { assetURL } from '@/scripts'

export default {
  props: {
    image: {
      type: String,
      required: true
    },
    url: {
      type: String,
      default: "#"
    }
  },
  setup: () => ({
    assetURL
  })
}
</script>

<style scoped>

img {
  height: 52px;
  padding: 8px;
  /*border: solid 1px grey;*/
  border-radius: 24px;
  background-color: white;
  filter: invert(100%);
  box-shadow: 0 0 8px 0px grey;
}

img:hover {
  box-shadow: 0 0 8px 2px black;
}

</style>