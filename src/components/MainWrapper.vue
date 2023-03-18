<script setup>
import { ref } from 'vue'
import { RouterView } from 'vue-router'

import ParticleBackground from './MainWrapper/ParticleBackground.vue'
import HomeView from '../views/HomeView.vue'
import ProjectsView from '../views/ProjectsView.vue'
</script>

<template>
  <main>
    <div class="main_wrapper">
      <ParticleBackground :scroll_pos="$route.meta.id" :scroll_speed="50" :scroll_time="1.5"/>
      <RouterView v-slot="{ Component, route }">
        <transition :name="transitionName">
          <div class="main_view" :key="route.name">
            <component :is="Component"/>
          </div>
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
      transitionDirection: ref(1),
      headerHeight: 0
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
      this.transitionDirection = to.meta.id > from.meta.id ? 1 : -1;
      console.log()
    }
  }
}

</script>

<style lang="less" scoped>

main {
  min-height: 100vh;
  overflow: hidden;
}

.main_wrapper {
  max-width: @maxContentWidth;
  
  /*padding: 0 var(--pad);*/
  margin: 0 auto;
  padding-top: calc(v-bind("headerHeight.toString() + 'px'") + var(--pad));
  padding-bottom: var(--pad);

  display: grid;

  --fade-time: .3s;
  --transform-time: .3s;
}

.fade-in-leave-to,
.fade-in-enter-from,
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform-origin: 50% 0;
}

.fade-in-enter-active {
  transition: opacity 1s ease-out;
}

.fade-in-leave-active {
  display: none;
}

.slide-enter-active,
.slide-leave-active {
  transition: opacity var(--fade-time) ease-out, transform var(--transform-time) ease-out;
}

.slide-leave-to {
  transform: translateX(calc(-100% * v-bind(transitionDirection))) translateY(0vh) scale(200%);
}

.slide-enter-from {
  transform: translateX(calc(50% * v-bind(transitionDirection))) translateY(-20vh) scale(50%);
}

</style>

<!-- To be accessed by children -->
<style>

.main_view {
  /* design 
  --border-size: var(--pad);
  --background-polygon: polygon(0 var(--border-size), var(--border-size) 0, 100% 0,
    100% calc(100% - var(--border-size)), calc(100% - var(--border-size)) 100%, 0 100%);
  -webkit-clip-path: var(--background-polygon);
  clip-path: var(--background-polygon);
  background: var(--color-background); */

  /* properties */
  padding: var(--pad);

  position: relative;

  align-self: start;
  grid-column: 1;
  grid-row: 1;
}

/*.main_view:nth-child(2) {
  
  transform: translateX(calc(150%));
}*/

.main_button {
  /* design */
  --spacing: 1.5rem;
  --reverse-spacing: calc(100% - var(--spacing));
  --button-polygon: polygon(0 0, var(--reverse-spacing) 0, 100% 50%, var(--reverse-spacing) 100%, 0% 100%, var(--spacing) 50%);
  -webkit-clip-path: var(--button-polygon);
  clip-path: var(--button-polygon);
  transition: 0.4s;
}

.main_button {
  /* properties */
  color: var(--color-text);
  background: var(--color-background-2);
  
  margin: 0;
  padding: calc(var(--pad)*0.5) calc(var(--pad)*2);
  text-align: center;
  overflow: auto;
  display: inline-block;
}

.main_button_border {
  filter: drop-shadow(0 0 1px #5cd9ff);
  /*background: -webkit-linear-gradient(-90deg,#5cd9ff 0%,#249abe 50%,#00536d 100%);*/
}

.main_button:hover {
  background: var(--color-background-1);
  color: var(--color-text-link);
  transition: 0.1s;
}

.main_button_border:hover {
  /*background: -webkit-linear-gradient(-90deg,#367e94 0%, #ffffff 50%,#5cd9ff 100%);*/
  filter: drop-shadow(0 0 8px #5cd9ff);
}

.main_left {
  display: block;
  text-align: left;
}

.main_right {
  display: block;
  text-align: right;
}

</style>