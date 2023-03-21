<template>
  <RouterLink :to="to" class="btn-border">
    <div class="btn btn-secondary py-3 px-5">
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