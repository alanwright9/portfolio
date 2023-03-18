<template>
  <nav>
    <RouterLink class="navlink" v-for="route in $router.getRoutes()" v-bind:to=route.path>
      {{route.name}}
    </RouterLink>
  </nav>
</template>

<script setup>
  import { RouterLink } from 'vue-router'
</script>

<style>

nav {
  text-align: left;
  font-size: 1rem;
  overflow: hidden;
  white-space: nowrap;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  color: var(--color-border);
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

.navlink.router-link-exact-active {
  color: var(--color-text);
}

.navlink.router-link-exact-active:hover {
  background-color: transparent;
}

@media (hover: hover) {
  .navlink:hover {
    background-color: hsla(0, 0%, 51%, 0.2);
  }
}

</style>