import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles"

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import '@/assets/style.scss'

createApp(App).use(router).use(Particles).mount('#app')
