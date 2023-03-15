<script setup>
  import { RouterLink } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink v-for="route in $router.getRoutes()" v-bind:to=route.path>
      {{route.name}}
    </RouterLink>
  </nav>
</template>

<style scoped>

nav {
  text-align: left;
  font-size: 1rem;
  margin-top: 1rem;
  overflow: hidden;
  white-space: nowrap;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>