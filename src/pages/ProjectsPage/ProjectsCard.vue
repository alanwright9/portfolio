<template>
  <div class="bg-softborder">
    <div class="card bg-widget h-100">

      <img :src="assetURL(data.image, 'img/projects')" class="card-img-top" :alt="data.image">

      <div class="card-body">
        <h5 class="card-title">{{ data.title }}</h5>
        <CardList label="Skills" :list="data.skills" />
        <CardList label="Libraries" :list="data.libraries" />
        <p class="card-text mt-1 text-white text-opacity-75">{{ data.description }}</p>
      </div>

      <div class="card-footer">
        <div class="row g-3 mb-3">
          <div class="col-auto" v-for="button in data.buttons">
            <div class="tech-btn-border">
              <a v-if="button.type === 'link'"
                :href="button.url" class="btn tech-btn btn-secondary px-4" target="_blank">
                {{ button.label }}
              </a>
              <a v-else-if="button.type === 'video'"
                href="#" class="btn tech-btn btn-secondary px-4"
                data-bs-toggle="modal" data-bs-target="#videoPlayer"
                :data-url="button.url">
                {{ button.label }}
              </a>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</template>

<script>
import CardList from './ProjectsCardList.vue'
import { assetURL } from '@/scripts'

export default {

  components: {
    CardList
  },

  props: {
    data: {}
  },

  setup: () => ({
    assetURL
  })
}
</script>