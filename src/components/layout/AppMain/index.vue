<template>
  <div>
    <MainParticleBackground/>
    <MainRouterView/>
    <VideoPlayerModal name="videoPlayer"/>
  </div>
</template>

<script setup>
import MainParticleBackground from './MainParticleBackground.vue'
import MainRouterView from './MainRouterView.vue'
import { VideoPlayerModal } from '@/components/ui'
</script>