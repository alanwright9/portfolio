<template>
  <div class="modal fade" :id="name" tabindex="-1" :aria-labelledby="`${name}Label`" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered content-area p-1 p-md-5">
      <div class="bg-softborder w-100">
        <div class="modal-content bg-widget w-100 mb-5">
          <div class="modal-header">
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body p-0 pb-5">
            <VideoPlayer :src="vid_url"/>
            <!--<LiteYouTubeEmbed v-if="vid_id != ''"
              :id="vid_id"
              :title="vid_title"
              ref="iframe"
              params="start=0&autoplay=1"
              poster="maxresdefault"/>-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from './VideoPlayer.vue'
import AssetURL from '@/scripts/asseturl'

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
  data() {
    return {
      vid_url: ""
    }
  },
  mounted() {
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
      console.log(import.meta.env.BASE_URL)
      //this.vid_url = `${import.meta.env.BASE_URL}assets/videos/${button.getAttribute("data-url")}`
      this.vid_url = AssetURL.get(button.getAttribute("data-url"), "videos")
    },
    startVideo() {
      
    },
    stopVideo() {
      this.vid_id = ""
      this.vid_title = ""
    }
  }
}

/*import { ref } from 'vue'
import LiteYouTubeEmbed from 'vue-lite-youtube-embed'
import 'vue-lite-youtube-embed/style.css'

export default {
  components: {
    LiteYouTubeEmbed
  },
  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup() {
    const iframe = ref(null)
    return {
      iframe
    }
  },
  data() {
    return {
      vid_id: "",
      vid_title: ""
    }
  },
  mounted() {
    const modal = document.getElementById(this.name)
    modal.addEventListener('show.bs.modal', this.setVideo)
    modal.addEventListener('hide.bs.modal', this.stopVideo)
  },
  unmounted() {
    const modal = document.getElementById(this.name)
    modal.removeEventListener('show.bs.modal', this.setVideo)
    modal.removeEventListener('hide.bs.modal', this.stopVideo)
  },
  methods: {
    setVideo(event) {
      const button = event.relatedTarget
      this.vid_id = button.getAttribute("video-id")
      this.vid_title = button.getAttribute("video-title")
    },
    startVideo() {
      
    },
    stopVideo() {
      this.vid_id = ""
      this.vid_title = ""
    }
  }
}*/
</script>