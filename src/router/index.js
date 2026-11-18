import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contacts from '../views/Contacts.vue'

// Маршрут = правило «по такому пути показать такой компонент»
const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/contacts', component: Contacts }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router