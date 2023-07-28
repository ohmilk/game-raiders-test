import { createApp } from 'vue'
import App2 from './App2.vue'
import router from './router'
import store from './store'

createApp(App2).use(store).use(router).mount('#app')
