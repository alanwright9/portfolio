<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'
</script>

<template>
  <main>
    <div class="main_wrapper">
      <RouterView v-slot="{ Component }">
        <transition :name="transitionName">
          <component :is="Component"/>
        </transition>
      </RouterView>
    </div>
  </main>
</template>

<script>

const defaultTransition = "fade-in"
const navTransition = "slide"

export default {
  data() {
    return {
      transitionName: ref(defaultTransition),
      transitionDirection: ref(1)
    }
  },
  watch: {
    $route(to, from) {
      this.transitionName = from.meta.id == undefined ? defaultTransition : navTransition
      this.transitionDirection = to.meta.id > from.meta.id ? 1 : -1;
    }
  }
}

</script>

<style scoped>

.main_wrapper {
  max-width: var(--screen-width);
  padding: 0 var(--pad);
  align-items: center;
  text-align: center;
  margin: var(--pad) auto;
  overflow: visible;

  display: grid;

  --fade-speed: .3s;
  --transform-speed: .3s;
}

.fade-in-leave-to,
.fade-in-enter-from,
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.fade-in-enter-active,
.fade-in-leave-active {
  transition: opacity 1s ease-out;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity var(--fade-speed) ease-out, transform var(--transform-speed) ease-out;
}

.slide-enter-from {
  transform: translateX(calc(100% * v-bind(transitionDirection))) scale(150%);
}

.slide-leave-to {
  transform: translateX(calc(-50% * v-bind(transitionDirection))) translateY(25vh) scale(50%);
}

</style>

<!-- To be accessed by children -->
<style>

.main_view {
  /* design */
  --border-size: var(--pad);
  --background-polygon: polygon(0 var(--border-size), var(--border-size) 0, 100% 0,
    100% calc(100% - var(--border-size)), calc(100% - var(--border-size)) 100%, 0 100%);
  -webkit-clip-path: var(--background-polygon);
  clip-path: var(--background-polygon);
  background: var(--color-background);

  /* properties */
  padding: var(--pad);
  overflow: auto;

  position: relative;

  align-self: start;
  grid-column: 1;
  grid-row: 1;
}

.main_button {
  /* design */
  --spacing: 1.5rem;
  --reverse-spacing: calc(100% - var(--spacing));
  --button-polygon: polygon(0 0, var(--reverse-spacing) 0, 100% 50%, var(--reverse-spacing) 100%, 0% 100%, var(--spacing) 50%);
  -webkit-clip-path: var(--button-polygon);
  clip-path: var(--button-polygon);
  color: var(--color-text);
  background: var(--color-background-2);

  /* properties */
  display: flex;
  float: left;
  overflow: hidden;
  padding: calc(var(--pad)*0.5) calc(var(--pad)*2);
}

.main_button:hover {
  background: var(--color-background-1);
  color: var(--color-text-link);
}

.main_button h1 {
  margin: 0;
}

</style>