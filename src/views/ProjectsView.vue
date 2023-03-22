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
        <div class="col" v-for="project in jsonProjects">
          <div class="bg-softborder">
            <div class="card bg-widget">
              <img :src="AssetURL.get(project.image, 'img/projects')" class="card-img-top" :alt="project.image">
              <div class="card-body">
                <h5 class="card-title">{{ project.title }}</h5>
                <p class="card-text">{{ project.description }}</p>
              </div>
              <div class="card-footer">
                <div class="container-fluid">
                  <div class="row g-3 mb-3">
                    <div class="col-auto" v-for="button in project.buttons">
                      <div class="tech-btn-border">
                        <a :href="button.url" class="btn tech-btn btn-secondary px-4" target="_blank">{{ button.label }}</a>
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

<script setup>
import jsonProjects from '@/assets/json/projects.json'
import AssetURL from '@/scripts/asseturl'
</script>