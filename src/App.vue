<script setup>
import HeaderWrapper from './components/HeaderWrapper.vue'
import MainWrapper from './components/MainWrapper.vue'
</script>

<template>
  <HeaderWrapper/>
  <MainWrapper/>
</template>

<style lang="less">
@media (max-width: @mobileWidth) {
  .desktop {
    display: none;
  }
}

@media (min-width: @mobileWidth) {
  .mobile {
    display: none;
  }
}
</style>