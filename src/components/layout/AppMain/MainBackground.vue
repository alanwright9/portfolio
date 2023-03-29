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
import { ref } from 'vue'

export default {

  data: () => ({
    velX: 0.0,
    velY: 0.0,
    tweenX: ref(null),
    tweenY: ref(null),
    lastScroll: 0
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

  mounted() {
    window.addEventListener("scroll", this.verticalFly)
  },

  unmounted() {
    window.removeEventListener("scroll", this.verticalFly)
  },

  watch: {

    // If our scroll position has changed, send the particles flying
    // based on how far it changed
    scroll_pos(to, from) {
      if (from != -1 && from != to) {
        this.flyBackground((from-to))
      }
    }
  },

  methods: {

    // Sends all the particles flying horizontally to the right (or left if negative)
    // at the specified speed and time (seconds)
    flyBackground(direction) {
      this.velX = this.scroll_speed * direction
      this.tweenX?.kill()
      this.tweenX = gsap.to(this, {velX: 0, duration: this.scroll_time})
    },

    verticalFly() {
      const direction = (this.lastScroll - window.scrollY) * 0.1;
      this.lastScroll = window.scrollY;
      this.velY += direction;
      this.tweenY?.kill()
      this.tweenY = gsap.to(this, {velY: 0, duration: this.scroll_time * 0.5})
    },

    // Called when particles need initiating
    particlesInit(engine) {
      loadFull(engine)

      // Add an updater to change the speed of particles based on how
      // fast they should be flying due to a webpage change
      engine.addParticleUpdater("flyControl", () => ({
        init: () => {},
        update: particle => {
          particle.velocity.x = particle.initialVelocity.x + this.velX
          particle.velocity.y = particle.initialVelocity.y + this.velY
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