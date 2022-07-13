import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.css"
import localStorage from './plugins/localStorage'

createApp(App).use(localStorage).use(router).mount('#app')
