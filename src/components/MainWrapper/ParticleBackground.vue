<template>
  <particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :url="jsonParticles"
  />
</template>

<script>
import assetURL from '@/scripts/asseturl'
import { loadFull } from "tsparticles"
import { gsap } from 'gsap'

export default {

  data: () => ({
    velocity: 0.0
  }),

  props: {
    // Horizontal 1-dimensional grid representing where we are located
    // to determine how far and in what direction to shift the particles
    scroll_pos: {
      type: Number,
      default: -1
    },

    // Speed at which the particles fly
    scroll_speed: {
      type: Number,
      default: 100
    },

    // Time (in seconds) to slow back down to 0
    scroll_time: {
      type: Number,
      default: 1
    }
  },

  setup() {
    // Import our particles asset
    const jsonParticles = assetURL("particles.json", "json")
    return {
      jsonParticles
    }
  },

  watch: {

    // If our scroll position has changed, send the particles flying
    // based on how far it changed
    scroll_pos(to, from) {
      if (from != -1 && from != to) {
        this.flyBackground(this.scroll_speed * (from-to), this.scroll_time)
      }
    }
  },

  methods: {

    // Sends all the particles flying horizontally to the right (or left if negative)
    // at the specified speed and time (seconds)
    flyBackground(speed, time) {
      gsap.fromTo(this, {velocity: speed}, {duration: time, velocity: 0, overwrite: true})
    },

    // Called when particles need initiating
    particlesInit(engine) {
      loadFull(engine)

      // Add an updater to change the speed of particles based on how
      // fast they should be flying due to a webpage change
      engine.addParticleUpdater("flyControl", () => ({
        init: () => {},
        update: particle => particle.velocity.x = particle.initialVelocity.x + this.velocity
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