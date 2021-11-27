import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Layout from '@/components/Layout.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
