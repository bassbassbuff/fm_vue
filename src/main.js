import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

axios.defaults.baseURL = 'http://143.244.133.202/'

createApp(App).use(store).use(router, axios).mount('#app')
