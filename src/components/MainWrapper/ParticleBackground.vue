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
      default: 0
    },
    scroll_speed: {
      type: Number,
      default: 100
    },
    scroll_time: {
      type: Number,
      default: 1.0
    }
  },

  created() {
    this.targetVelocity = 0.0
  },

  watch: {
    scroll_pos(to, from) {
      if (from != to) {
        this.sendBackground(this.scroll_speed * (from-to), this.scroll_time)
      }
    }
  },

  methods: {

    sendBackground(speed, time) {
      this.targetVelocity = speed;
      gsap.to(this, {duration: time, targetVelocity: 0, overwrite: true})
    },

    particlesInit(main) {
      // Capture the tsParticles instance
      loadFull(main)
      main.addParticleUpdater("flyControl", () => {
        return {
          init: () => {
          },
          update: (particle) => {
            particle.velocity.x = particle.initialVelocity.x + this.targetVelocity;
          }
        }
      })
    },

    particlesLoaded(container) {
      // Start the animation
      console.log("Particles container loaded", container);
    },
  },
}

</script>