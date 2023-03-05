/** @format */

import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import config from './config'
console.log(config.mockApi)

axios.get(config.mockApi + '/login').then((res) => {
  console.log(res)
})

const app = createApp(App)

app.use(router)
app.mount('#app')
