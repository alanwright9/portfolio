<template>
  <div>
    <video v-if="src != ''" controls>
      <source type="video/mp4" :src="src" />
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