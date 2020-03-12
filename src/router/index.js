import Vue from 'vue';
import VueRouter from 'vue-router';
import Search from '@/components/Search.vue';
import About from '@/components/About.vue';
import TrackDetail from '@/components/TrackDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/search',
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/track/:id',
    name: 'track',
    component: TrackDetail,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
