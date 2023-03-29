<template>
  <div>
    <MainBackground/>
    <MainRouteManager/>
    <VideoPlayerModal name="videoPlayer"/>
  </div>
</template>

<script setup>
import MainBackground from './MainBackground.vue'
import MainRouteManager from './MainRouteManager.vue'
import VideoPlayerModal from '@/components/ui/VideoPlayerModal.vue'
</script>