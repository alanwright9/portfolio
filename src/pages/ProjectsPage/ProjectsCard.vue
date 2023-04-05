<template>
  <div class="bg-softborder h-100">
    <div class="card bg-widget h-100">

      <div class="position-relative">
        <div class="title-bg position-absolute end-0 p-2 ps-4 text-end">
          <h5 class="card-title mx-2">{{ data.title }}</h5>
        </div>
        <div class="position-absolute bottom-0 row g-4 p-3">
          <ProjectsCardButton v-for="button in data.buttons" :data="button" />
        </div>
        <img :src="assetURL(data.image, 'img/projects')" class="card-img-top" :alt="data.image">
      </div>

      <div class="card-body">
        <ProjectsCardList label="Skills" :list="data.skills" />
        <ProjectsCardList label="Libraries" :list="data.libraries" />
        <p class="card-text mt-1 text-white text-opacity-75" v-html="data.description" />
      </div>
      
    </div>
  </div>
</template>

<script>
import ProjectsCardList from './ProjectsCardList.vue'
import ProjectsCardButton from './ProjectsCardButton.vue'
import { assetURL } from '@/scripts'

export default {

  components: {
    ProjectsCardList,
    ProjectsCardButton
  },

  props: {
    data: {}
  },

  setup: () => ({
    assetURL
  })
}
</script>

<style scoped>
.title-bg {
  --shape: polygon(0 0, 100% 0, 100% 100%, 1rem 100%);
  -webkit-clip-path: var(--shape);
  clip-path: var(--shape);
  background-color: #000000a0;
}

</style>