<template>
  <div>
    <ParticleBackground :scroll_pos="$route.meta.id" :scroll_speed="50" :scroll_time="1.5"/>
    <div class="view-manager">
      <RouterView v-slot="{ Component, route }">
        <transition :name="transitionName">
          <div class="view w-100" :key="route.name">
            <div class="w-100 content-area mx-auto px-4 px-md-5 py-5 top-0 left-0">
              <component :is="Component"/>
            </div>
          </div>
        </transition>
      </RouterView>
    </div>
    <VideoPlayerModal name="videoPlayer"/>
  </div>
</template>

<script>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
import gsap from 'gsap'

import VideoPlayerModal from '@/components/VideoPlayerModal.vue'
import ParticleBackground from './MainWrapper/ParticleBackground.vue'

const defaultTransition = "fade-in"
const navTransition = "slide"

export default {
  
  components: {
    VideoPlayerModal,
    ParticleBackground
  },

  data() {
    return {
      transitionName: ref(defaultTransition),
      transitionDirection: 1,
      headerHeight: 0,
      fadeinTime: '1s',
      slideTime: '0.3s'
    }
  },

  mounted() {
    this.calculateHeaderHeight()
    window.addEventListener('resize', this.calculateHeaderHeight);
  },

  unmounted() {
    window.removeEventListener('resize', this.calculateHeaderHeight);
  },

  methods: {
    calculateHeaderHeight() {
      this.headerHeight = document.getElementsByTagName("header")[0].offsetHeight
    }
  },

  watch: {
    $route(to, from) {
      this.transitionName = from.meta.id == undefined ? defaultTransition : navTransition
      this.transitionDirection = to.meta.id > from.meta.id ? 1 : -1
    }
  }
}

</script>

<style scoped>

.view-manager {
  max-width: 100vw;

  overflow-x: hidden;

  display: grid;
  padding-top: v-bind("headerHeight.toString() + 'px'");
}

.view {
  grid-row: 1;
  grid-column: 1;

  
}

.main_view {
  /* properties */
  grid-column: 1;
  grid-row: 1;
}

.fade-in-leave-to,
.fade-in-enter-from,
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform-origin: 50% 50%;
}

.fade-in-enter-active {
  transition: opacity v-bind(fadeinTime) ease-out;
}

.fade-in-leave-active {
  display: none;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    transform v-bind(slideTime) ease-out,
    opacity v-bind(slideTime) ease-out,
    filter v-bind(slideTime) ease-out;
}

.slide-enter-active {
  position: fixed;
}

.slide-leave-to {
  transform: translateX(calc(-100% * v-bind(transitionDirection))) scale(200%) rotateZ(calc(-15deg * v-bind(transitionDirection)));
  filter: blur(16px);
}

.slide-enter-from {
  transform:
    translateX(calc(50% * v-bind(transitionDirection)))
    scale(50%) rotateZ(calc(15deg * v-bind(transitionDirection)));
}

</style>

<!-- To be accessed by children -->
<style>

.main_left {
  display: block;
  text-align: left;
}

.main_right {
  display: block;
  text-align: right;
}

</style>