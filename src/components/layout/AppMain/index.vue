<template>
  <div>
    <MainBackground :scroll_pos="$route.meta.id" :scroll_speed="50" :scroll_time="1.5"/>
    <MainRouteManager/>
    <VideoPlayerModal name="videoPlayer"/>
  </div>
</template>

<script setup>
import MainBackground from './MainBackground.vue'
import MainRouteManager from './MainRouteManager.vue'
import VideoPlayerModal from '@/components/ui/VideoPlayerModal.vue'
</script>