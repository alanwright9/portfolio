<template>
  <img v-bind:src="getImageURL()" alt="" />
</template>

<script>
import AssetURL from '@/scripts/asseturl'

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
      return AssetURL.get(this.img + '.svg', 'icons')
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