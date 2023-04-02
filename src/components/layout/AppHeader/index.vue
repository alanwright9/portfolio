<template>
  <header class="bg-primary position-fixed top-0 w-100">
    <div class="navbar navbar-expand content-area mx-auto px-4 px-md-5 py-3">
      <div class="container-fluid">
        <div class="me-auto">
          <HeaderProfile/>
        </div>
        <div class="d-none d-lg-flex mx-auto">
          <HeaderRouteList ulclass="nav" aclass="tech-navlink p-3"/>
        </div>
        <div class="d-none d-lg-flex ms-auto">
          <HeaderSocials/>
        </div>
        <div class="d-flex d-lg-none ms-auto navbar-item">
          <a class="d-flex" data-bs-toggle="offcanvas" href="#route-nav" role="button" aria-controls="route-nav">
            <p class="d-flex me-2">{{ $route.name }}</p>
            <AppIconSm img="list"/>
          </a>
        </div>
      </div>
    </div>
  </header>

  <HeaderMobileNav name="route-nav"/>
</template>

<script setup>
import HeaderProfile    from './HeaderProfile.vue'
import HeaderRouteList  from './HeaderRouteList.vue'
import HeaderSocials    from './HeaderSocials.vue'
import HeaderMobileNav  from './HeaderMobileNav.vue'

import { AppIconSm } from '@ui'
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