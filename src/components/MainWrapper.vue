<template>
  <div>
    <ParticleBackground :scroll_pos="$route.meta.id" :scroll_speed="50" :scroll_time="1.5"/>
    <RouterViewManager/>
    <VideoPlayerModal name="videoPlayer"/>
  </div>
</template>

<script setup>
import VideoPlayerModal from '@/components/VideoPlayerModal.vue'
import ParticleBackground from './MainWrapper/ParticleBackground.vue'
import RouterViewManager from './MainWrapper/RouterViewManager.vue'
</script>