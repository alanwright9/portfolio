<template>
  <div :class="ulclass">
    <div v-for="route in $router.getRoutes()" :data-bs-dismiss="dismiss">
      <RouterLink :class="aclass" v-bind:to=route.path>
        {{route.name}}
      </RouterLink>
    </div>
  </div>
</template>

<script>
import { RouterLink } from 'vue-router'

export default {
  props: {
    ulclass: {
      type: String,
      default: "nav"
    },
    aclass: {
      type: String,
      default: "nav-link"
    },
    dismiss: {
      type: String
    }
  }
}
</script>