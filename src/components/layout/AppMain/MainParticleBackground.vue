<template>
  <particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :url="particlesURL"
  />
</template>

<script>
import { assetURL, StringHelper } from '@/scripts'
import { useRouterStore } from '@/store/routerStore'
import { loadFull } from 'tsparticles'
import { gsap } from 'gsap'
import { ref } from 'vue'
import throttle from 'lodash.throttle'

const particleFlyDuration   = 1.5
const horizontalSpeed       = 50
const verticalScrollFactor  = 0.05
const verticalScrollDelay   = 100

const flyAxis = () => ({

  _tween: ref(null),
  velocity: 0.0,

  setVelocity(value) {
    this.velocity = value
    if (this._tween) {
      this._tween.invalidate()
      this._tween.restart()
    }
    else {
      this._tween = gsap.to(this, {velocity: 0.0, duration: particleFlyDuration, overwrite: true})
    }
  }
})

export default {

  data: () => ({
    axisX: flyAxis(),
    axisY: flyAxis(),
    lastScroll: 0
  }),

  setup: () => ({
    particlesURL : assetURL("particles.json", "json"),
    routerStore: useRouterStore()
  }),

  mounted() {
    window.addEventListener("scroll", throttle(this.onWindowScroll, verticalScrollDelay))
  },

  unmounted() {
    window.removeEventListener("scroll", throttle(this.onWindowScroll, verticalScrollDelay))
  },

  computed: {
    cssFadeInTime: (vm) => StringHelper.toCSSs(vm.routerStore.fadeIn)
  },

  watch: {
    'routerStore.routeId' (to, from) {
      if (from != undefined && to != from) {
        this.axisX.setVelocity((from - to) * horizontalSpeed)
      }
    }
  },

  methods: {

    onWindowScroll() {
      if (this.lastScroll != window.scrollY) {
        this.axisY.setVelocity(this.axisY.velocity + (this.lastScroll - (this.lastScroll = window.scrollY)) * verticalScrollFactor)
      }
    },

    // Called when particles need initiating
    async particlesInit(engine) {
      await loadFull(engine)

      // Add an updater to change the speed of particles based on how
      // fast they should be flying due to a webpage change
      engine.addParticleUpdater("flyControl", () => ({
        init: () => {},
        update: particle => {
          particle.velocity.x = particle.initialVelocity.x + this.axisX.velocity
          particle.velocity.y = particle.initialVelocity.y + this.axisY.velocity
        }
      }))
    },

    // Called once particles are loaded
    async particlesLoaded(container) {
      // console.log("Particles container loaded", container)
    }
  },
}

</script>

<style scoped>

#tsparticles {
  position: fixed;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  animation-name: particle-entry;
  animation-duration: v-bind(cssFadeInTime);
}

@keyframes particle-entry {
  0% {
    opacity: 0
  }
  100% {
    opacity: 1
  }
}

</style>