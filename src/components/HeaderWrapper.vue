<template>
  <header>
    <div class="header_wrapper">
      <Profile/>
      <NavBar class="desktop"/>
      <Socials/>
    </div>
  </header>
</template>

<script setup>
import Profile from './HeaderWrapper/Profile.vue'
import NavBar from './HeaderWrapper/NavBar.vue'
import Socials from './HeaderWrapper/Socials.vue'
</script>

<style lang="less" scoped>

header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--color-background-1);
  z-index: 99;
}

.header_wrapper {
  line-height: 1.5;
  max-width: @maxContentWidth;
  
  padding: calc(var(--pad)/2) var(--pad);
  margin: 0 auto;
  overflow: auto;
  
  align-items: center;
  display: flex;
  justify-content: space-between;
}

</style>