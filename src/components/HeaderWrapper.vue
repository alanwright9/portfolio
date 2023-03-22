<template>
  <header class="bg-primary position-fixed top-0 w-100">
    <div class="navbar navbar-expand content-area mx-auto px-4 px-md-5 py-3">
      <div class="container-fluid">
        <div class="me-auto">
          <Profile/>
        </div>
        <div class="d-none d-md-flex mx-auto">
          <RouteNav ulclass="nav" aclass="tech-navlink p-3"/>
        </div>
        <div class="d-none d-md-flex ms-auto">
          <Socials/>
        </div>
        <div class="d-flex d-md-none ms-auto navbar-item">
          <a class="d-flex" data-bs-toggle="offcanvas" href="#route-nav" role="button" aria-controls="route-nav">
            <p class="d-flex me-2">{{ $route.name }}</p>
            <NavbarIcon img="list"/>
          </a>
        </div>
      </div>
    </div>
  </header>

  <OffCanvas name="route-nav"/>
</template>

<script setup>
import Profile from './HeaderWrapper/Profile.vue'
import RouteNav from './HeaderWrapper/RouteNav.vue'
import Socials from './HeaderWrapper/Socials.vue'
import NavbarIcon from './HeaderWrapper/NavbarIcon.vue'
import OffCanvas from './HeaderWrapper/OffCanvas.vue'
</script>

<style scoped>

header {
  position: fixed;
  z-index: 99 !important;
}

.offcanvas {
  width: auto !important;
}

</style>