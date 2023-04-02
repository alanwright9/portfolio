<template>
  <div class="col">
    <a v-if="data.type === 'source'" :href="data.url" target="_blank">
      <img :src="assetURL('github.svg', 'icons')">
    </a>
    <a v-else-if="data.type === 'video'" href="#"
      data-bs-toggle="modal" data-bs-target="#videoPlayer" :data-url="data.url">
      <img :src="assetURL('play-btn.svg', 'icons')">
    </a>
  </div>
</template>

<script>
import { assetURL } from '@/scripts'

export default {
  props: {
    data: {}
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
  box-shadow: 0 0 8px 0px #00000080;
}

img:hover {
  box-shadow: 0 0 8px 2px black;
}

</style>