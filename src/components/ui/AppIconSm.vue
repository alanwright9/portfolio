<template>
  <img v-bind:src="getImageURL()" alt="" />
</template>

<script>
import { assetURL } from '@/scripts'

export default {
  props: {
    img: {
      type: String,
      required: true
    },
    normal: {
      type: String,
      default: "100%"
    },
    hover: {
      type: String,
      default: "50%"
    }
  },

  methods: {
    getImageURL() {
      return assetURL(this.img + '.svg', 'icons')
    }
  }
}
</script>

<style scoped>

img {
  height: 24px;
  filter: invert(v-bind(normal));
}

a:hover img {
  filter: invert(v-bind(hover));
}

</style>