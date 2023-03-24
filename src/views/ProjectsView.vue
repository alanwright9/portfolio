<template>
  <div>
    <div class="container-fluid px-3 px-md-5 mb-5">
      <div class="text-start">
        <h1 class="mb-3 mb-md-4">My Projects</h1>
        <p class="fs-5">
          The following items show off my coding skills and experience.
          Each contain a brief description with links the source code and a demo.
          Feel free to check them out! These represent my ability to problem-solve
          using various technologies, with a smooth, neatly-formatted result.</p>
      </div>
      <hr class="m-4 m-md-5">
    </div>
    <div class="container-fluid">
      <div class="row row-cols-1 row-cols-md-2 g-5">
        <div class="col d-flex" v-for="project in jsonProjects">
          <div class="bg-softborder">
            <div class="card bg-widget h-100">
              <img :src="AssetURL.get(project.image, 'img/projects')" class="card-img-top" :alt="project.image">
              <div class="card-body">

                <h5 class="card-title">{{ project.title }}</h5>

                <CardList label="Skills" :list="project.skills" />
                <CardList label="Libraries" :list="project.libraries" />

                <p class="card-text mt-1">{{ project.description }}</p>
              </div>
              <div class="card-footer">
                <div class="container-fluid">
                  <div class="row g-3 mb-3">
                    <div class="col-auto" v-for="button in project.buttons">
                      <div class="tech-btn-border">
                        <a v-if="button.type == 'link'"
                          :href="button.url" class="btn tech-btn btn-secondary px-4" target="_blank">
                          {{ button.label }}
                        </a>
                        <a v-if="button.type == 'video'"
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
          </div>
        </div>
      </div>
      <div style="height: 25vh" />
    </div>
  </div>
</template>

<script>
import CardList from './components/ProjectsCardList.vue'
import jsonProjects from '@/assets/json/projects.json'
import AssetURL from '@/scripts/asseturl'

export default {
  components: {
    CardList
  },
  setup() {
    return {
      jsonProjects,
      AssetURL
    }
  },
  data() {
    return {
      video: ""
    }
  }
}
</script>