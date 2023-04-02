<template>
  <div class="row">
    <div class="col col-md-10 col-lg-8">
      <PageP>
        <slot/>
      </PageP>
    </div>
  </div>
</template>

<script setup>
import PageP from './PageP.vue'
</script>