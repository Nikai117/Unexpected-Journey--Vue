import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import router from './router'

import './assets/main.css'

const app = createApp(App)

axios.defaults.baseURL = "http://localhost:2020/";

app.use(router)

app.mount('#app')
