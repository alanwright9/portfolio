<template>
  <particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :url="particlesURL"
  />
</template>

<script>
import assetURL from '@/scripts/asseturl'
import { loadFull } from "tsparticles"
import { gsap } from 'gsap'

const particleFlyDuration   = 1.5
const horizontalSpeed       = 50
const verticalScrollFactor  = 0.05

const newAxis = () => ({

  velocity: 0.0,

  setVelocity(value) {
    this.velocity = value
    this._restart()
  },

  _restart() {
    gsap.to(this, {velocity: 0.0, duration: particleFlyDuration, overwrite: true})
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
    window.addEventListener("scroll", this.onWindowScroll)
  },

  unmounted() {
    window.removeEventListener("scroll", this.onWindowScroll)
  },

  watch: {

    // If our scroll position has changed, send the particles flying
    // based on how far it changed
    $route(to, from) {

      // On page reload, do not shoot particles anywhere
      if (!from) {
        return
      }

      // Grab the ID of the to/from pages
      const to_id   = to.meta.id
      const from_id = from.meta.id

      // If we didn't click on the same page, shoot particles
      if (to_id != from_id) {
        this.axisX.setVelocity((from_id - to_id) * horizontalSpeed)
      }
    }
  },

  methods: {

    onWindowScroll() {
      this.axisY.setVelocity(this.axisY.velocity +
        (this.lastScroll - (this.lastScroll = window.scrollY)) * verticalScrollFactor)
    },

    // Called when particles need initiating
    particlesInit(engine) {
      loadFull(engine)

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
    particlesLoaded(container) {
      // console.log("Particles container loaded", container)
    }
  },
}

</script>

<style scoped>

#tsparticles {
  position: fixed;
  z-index: -1;
}

</style>