<template>
  <div v-if="true">
  <div :class="`row ${defaultSize()}${mediumSize()}${largeSize()} g-5`">
    <slot/>
  </div>
</div>
</template>

<script>
import { collisionVelocity } from 'tsparticles-engine'

export default {
  props: {
    'size': {
      default: "1"
    },
    'size-md': {
      default: "0"
    },
    'size-lg': {
      default: "0"
    }
  },

  methods: {
    defaultSize() {
      return `row-cols-${this.size}`
    },
    mediumSize() {
      return this.sizeMd === "0" ? `` : ` row-cols-md-${this.sizeMd}`
    },
    largeSize() {
      return this.sizeLg === "0" ? `` : ` row-cols-xl-${this.sizeLg}`
    }
  }
}
</script>