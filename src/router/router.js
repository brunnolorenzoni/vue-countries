
import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/views/Home.vue'
import Country from '@/views/Country.vue'
import PageNotFound from '@/views/NotFound.vue'

const history = createWebHistory()
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/country/:cca3',
    name: 'country',
    component: Country,
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: PageNotFound 
  }
]

const router = createRouter({
  history,
  routes
})

export default router