<template>
  <div class="modal fade" :id="name" tabindex="-1" :aria-labelledby="`${name}Label`" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered content-area p-1 p-md-5">
      <div class="bg-softborder mx-auto">
        <div class="modal-content bg-widget mb-5">
          <div id="player" class="modal-body p-0 position-relative">
            <VideoPlayer :src="vid_url" />
            <button type="button" class="btn-close btn-close-white position-absolute top-0 end-0 m-2 p-2" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import AssetURL from '@/scripts/asseturl'
import { ref } from 'vue'

export default {

  components: {
    VideoPlayer
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },

  data: () => ({
    vid_url: "",
    video: ref(null)
  }),

  mounted() {
    this.video = document.getElementsByTagName('video')[0];
    const modal = document.getElementById(this.name)
    modal.addEventListener('show.bs.modal', this.setVideo)
    modal.addEventListener('shown.bs.modal', this.startVideo)
    modal.addEventListener('hide.bs.modal', this.stopVideo)
  },

  unmounted() {
    const modal = document.getElementById(this.name)
    modal.removeEventListener('show.bs.modal', this.setVideo)
    modal.removeEventListener('shown.bs.modal', this.startVideo)
    modal.removeEventListener('hide.bs.modal', this.stopVideo)
  },
  
  methods: {
    setVideo(event) {
      const button = event.relatedTarget
      this.vid_url = AssetURL.get(button.getAttribute("data-url"), "videos")
    },
    startVideo() {
      this.video.play()
    },
    stopVideo() {
      this.video.pause()
    }
  }
}
</script>

<style scoped>
</style>