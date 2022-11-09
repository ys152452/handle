// register vue composition api globally
import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'

import '@unocss/reset/tailwind.css'
import './styles/main.css'
import 'uno.css'

const Help = import('./components/WelcomePage.vue')
const Home = import('./components/Home.vue')
const Title = import('./components/AppName.vue')
const routes = [
  { path: '/help', component: Help },
  { path: '/title', component: Title },
  { path: '/', component: Home },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes, // `routes: routes` 的缩写
})
const app = createApp(App)
app.use(router)
app.mount('#app')
