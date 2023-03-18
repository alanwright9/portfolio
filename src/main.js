import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Particles from "vue3-particles";

import './assets/style/main.css'

createApp(App).use(router).use(Particles).mount('#app')
