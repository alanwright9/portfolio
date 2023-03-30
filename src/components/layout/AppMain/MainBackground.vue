<template>
  <particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :url="particlesURL"
  />
</template>

<script>
import { assetURL, routeManager } from '@/scripts'
import { loadFull } from 'tsparticles'
import { gsap } from 'gsap'
import { ref } from 'vue'
import throttle from 'lodash.throttle'

const particleFlyDuration   = 1.5
const horizontalSpeed       = 50
const verticalScrollFactor  = 0.05
const verticalScrollDelay   = 100

const newAxis = () => ({

  _tween: ref(null),
  _velocity: 0.0,

  get velocity() {
    return this._velocity
  },

  set velocity(value) {
    this._velocity = value
    if (this._tween) {
      this._tween.invalidate()
      this._tween.restart()
    }
    else {
      this._tween = gsap.to(this, {_velocity: 0.0, duration: particleFlyDuration, overwrite: true})
    }
  }
})

export default {

  data: () => ({
    axisX: newAxis(),
    axisY: newAxis(),
    lastScroll: 0
  }),

  setup: () => ({
    particlesURL : assetURL("particles.json", "json")
  }),

  mounted() {
    window.addEventListener("scroll", throttle(this.onWindowScroll, verticalScrollDelay))
    routeManager.addEventListener("route-changed", this.onRouteChanged)
  },

  unmounted() {
    window.removeEventListener("scroll", throttle(this.onWindowScroll, verticalScrollDelay))
    routeManager.removeEventListener("route-changed", this.onRouteChanged)
  },

  methods: {

    onWindowScroll() {
      this.axisY.velocity += (this.lastScroll - (this.lastScroll = window.scrollY)) * verticalScrollFactor
    },

    onRouteChanged(event) {
      if (event.to != event.from) {
        this.axisX.velocity = (event.from - event.to) * horizontalSpeed
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

  animation-name: particle-entry;
  animation-duration: 1s;
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