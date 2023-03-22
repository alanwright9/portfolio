<template>
  <div class="offcanvas offcanvas-end bg-primary" tabindex="-1" :id="name" :aria-labelledby="name">
    <div class="offcanvas-header">
      <h5 class="offcanvas-title ps-1" id="routeNavLabel">
        Navigation
      </h5>
      <button class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close" />
    </div>
    <div class="offcanvas-body">
      <hr class="m-4" />
      <RouteNav ulclass="text-center" aclass="d-block tech-navlink fs-4 py-3" dismiss="offcanvas" />
      <hr class="m-4" />
      <Socials />
    </div>
  </div>
</template>

<script>
import Socials from './Socials.vue'
import RouteNav from './RouteNav.vue'

export default {
  components: {
    Socials,
    RouteNav
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>