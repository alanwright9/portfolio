<script setup>
import Profile from './HeaderWrapper/Profile.vue'
import NavBar from './HeaderWrapper/NavBar.vue'
import Socials from './HeaderWrapper/Socials.vue'
</script>

<template>
  <header>
    <div class="header_wrapper">
      <div class="header_item">
        <Profile/>
      </div>
      <div class="header_item desktop">
        <NavBar/>
      </div>
      <div class="header_item">
        <Socials/>
      </div>
    </div>
  </header>
</template>

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

.header_item {
  float: left;
}

</style>