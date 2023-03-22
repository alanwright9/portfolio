<template>
  <RouterLink :to="to" class="tech-btn-lg-border">
    <div class="btn tech-btn-lg btn-tertiary py-3 px-5">
      <p class="fs-2 mx-md-4">
        {{ label }}
      </p>
    </div>
  </RouterLink>
</template>

<script>

export default {
  props: ['to', 'label']
}

</script>