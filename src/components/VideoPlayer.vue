<template>
  <div>
    <video controls autoplay>
      <source v-if="src != ''" type="video/mp4" :src="src" />
    </video>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type: String
    }
  }
}
</script>

<style>
video {
  width: 100%;
}
</style>