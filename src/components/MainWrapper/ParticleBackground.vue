<script setup>
import { loadFull } from "tsparticles"
import { gsap } from 'gsap'

const jsonParticles = new URL(`../../assets/json/particles.json`, import.meta.url).href
</script>

<template>
  <Particles
    id="tsparticles"
    :particlesInit="particlesInit"
    :particlesLoaded="particlesLoaded"
    :url="jsonParticles" />
</template>

<script>

export default {

  props: {
    scroll_pos: {
      type: Number,
      default: -1
    },
    scroll_speed: {
      type: Number,
      default: 100
    },
    scroll_time: {
      type: Number,
      default: 1
    }
  },

  mounted() {
    this.velocity = 0.0
  },

  watch: {

    // If our scroll position has changed, send the particles flying
    // based on how far it changed
    scroll_pos(to, from) {
      if (from >= 0 && from != to) {
        this.flyBackground(this.scroll_speed * (from-to), this.scroll_time)
      }
    }
  },

  methods: {

    // Sends all the particles flying horizontally to the right (or left if negative)
    // at the specified speed and time (seconds)
    flyBackground(speed, time) {
      this.velocity = speed;
      gsap.to(this, {duration: time, velocity: 0, overwrite: true})
    },

    // Called when particles need initiating
    particlesInit(main) {
      loadFull(main)

      // Add an updater to change the speed of particles based on how
      // fast they should be flying due to a webpage change
      main.addParticleUpdater("flyControl", () => {
        return {
          init: () => {
          },
          update: (particle) => {
            particle.velocity.x = particle.initialVelocity.x + this.velocity;
          }
        }
      })
    },

    // Called once particles are loaded
    particlesLoaded(container) {
      console.log("Particles container loaded", container);
    },
  },
}

</script>