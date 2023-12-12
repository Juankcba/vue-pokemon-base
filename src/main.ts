import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { VueQueryPlugin } from '@tanstack/vue-query'
import store from '@/store/store'

store.startLoadingPokemons()
const app = createApp(App)
VueQueryPlugin.install(app)
app.use(router)

app.mount('#app')
