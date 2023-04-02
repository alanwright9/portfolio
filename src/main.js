import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles"
import * as Globals from '@/components/global'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@/assets/style.scss'

const app = createApp(App)

app.use(router).use(Particles).mount('#app')

for (const globalItem in Globals) {
  app.component(globalItem, Globals[globalItem])
}