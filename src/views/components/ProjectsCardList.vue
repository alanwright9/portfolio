<template>
  <div class="container-fluid d-flex">
    <p>{{ label }}: </p>
    <ul class="list-unstyled d-flex flex-wrap mb-2">
      <li class="ps-3 fst-italic text-nowrap" v-for="item in list">
        <p class="text-white text-opacity-75">{{ item }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true
    },
    list: {
      type: Array,
      require: true
    }
  }
}
</script>