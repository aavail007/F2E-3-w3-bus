import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import BusDynamic from '../views/BusDynamic.vue';
import Layout from '@/components/Layout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'BusDynamic',
    component: Layout,
    children: [
      {
        path: 'bus',
        name: 'BusDynamic',
        component: BusDynamic
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
