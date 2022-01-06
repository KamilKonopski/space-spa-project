import {
  createRouter,
  createWebHistory
} from 'vue-router'

import HomePage from '../views/HomePage.vue';
import ListPage from '../views/ListPage.vue';
import MarsPage from '../views/MarsPage.vue';
import EarthPage from '../views/EarthPage.vue';
import MoonPage from '../views/MoonPage.vue';

const routes = [{
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/list',
    name: 'List',
    component: ListPage,
  },
  {
    path: '/list/mars',
    name: 'Mars',
    component: MarsPage,
  },
  {
    path: '/list/earth',
    name: 'Earth',
    component: EarthPage,
    props: true,
  },
  {
    path: '/list/moon',
    name: 'Moon',
    component: MoonPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router