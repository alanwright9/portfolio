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
  max-width: 100%;
  max-height: 90vh;
}
</style>