<template>
  <RouterLink :to="to" class="main_button_border">
    <div class="main_button">
      <h2>
        {{ label }}
      </h2>
    </div>
  </RouterLink>
</template>

<script>

export default {
  props: ['to', 'label']
}

</script>