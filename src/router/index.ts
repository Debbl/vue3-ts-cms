import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import About from '@/views/AboutView.vue';
import Home from '@/views/HomeView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/home',
    component: Home,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
