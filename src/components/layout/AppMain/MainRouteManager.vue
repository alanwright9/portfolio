<template>
  <div class="view-manager">
    <RouterView v-slot="{ Component, route }">
      <transition :name="transitionName">
        <div class="view w-100" :key="route.name">
          <div class="content-area mx-auto px-4 px-md-5 py-5">
            <component :is="Component"/>
          </div>
        </div>
      </transition>
    </RouterView>
  </div>
</template>

<script>
import StringHelper from '@/scripts/stringhelper'
import RouterDefaults from '@/scripts/routerdefaults'

const defaultTransition = "fade-in"
const navTransition = "slide"

export default {
  data: () => ({
    transitionName: defaultTransition,
    transitionDirection: 1,
    headerHeight: 0,
    lastScroll: 0,
    cssFadeTime: StringHelper.toCSSs(1),
    cssSlideTime: StringHelper.toCSSs(RouterDefaults.transition)
  }),

  setup: () => ({
    StringHelper,
    RouterDefaults
  }),

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
      this.lastScroll = window.scrollY
      this.transitionName = from.meta.id == undefined ? defaultTransition : navTransition
      this.transitionDirection = to.meta.id > from.meta.id ? 1 : -1
    }
  }
}
</script>

<style scoped>
.view-manager {
  max-width: 100vw;

  overflow-x: hidden;

  display: grid;
  padding-top: v-bind("StringHelper.toCSSpx(headerHeight)");
}

.view {
  grid-row: 1;
  grid-column: 1;
}

.fade-in-leave-to,
.fade-in-enter-from,
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
}

.fade-in-enter-active {
  transition: opacity v-bind(cssFadeTime) ease-out;
}

.slide-enter-active,
.slide-leave-active {
  position: fixed;
  transition:
    transform v-bind(cssSlideTime) ease-out,
    opacity v-bind(cssSlideTime) ease-out,
    filter v-bind(cssSlideTime) ease-out;
}

.slide-enter-active {
  transform-origin: 50% min(50%, 50vh);
}
.slide-leave-active {
  top: v-bind("StringHelper.toCSSpx(headerHeight-lastScroll)");
  transform-origin: 50% calc(v-bind("StringHelper.toCSSpx(lastScroll)") + 50vh);
}

.slide-enter-from {
  transform:
    translateX(calc(25% * v-bind(transitionDirection)))
    translateY(v-bind("StringHelper.toCSSpx(-lastScroll)"))
    scale(50%) rotateZ(calc(15deg * v-bind(transitionDirection)));
}
.slide-leave-to {
  transform:
    translateX(calc(-50% * v-bind(transitionDirection)))
    translateY(v-bind("StringHelper.toCSSpx(lastScroll)"))
    scale(200%) rotateZ(calc(-15deg * v-bind(transitionDirection)));
  filter: blur(16px);
}
</style>