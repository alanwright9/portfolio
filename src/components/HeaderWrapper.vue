<script setup>
import Profile from './HeaderWrapper/Profile.vue'
import NavBar from './HeaderWrapper/NavBar.vue'
</script>

<template>
  <header>
    <div class="header_wrapper">
      <Profile/>
      <NavBar/>
    </div>
    <div class="header_background"></div>
  </header>
</template>

<style lang="less" scoped>

header {
  background-color: var(--color-background-1);
}

.header_wrapper {
  line-height: 1.5;
  max-width: @maxContentWidth;
  padding: var(--pad);
  margin: 0 auto;
  overflow: auto;
}

</style>