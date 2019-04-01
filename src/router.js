import Vue from 'vue';
import Router from 'vue-router';

import Home from './screens/home.vue';
import Post from './screens/post.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/1',
    },
    {
      path: '/:page',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/:postSlug',
      name: 'post',
      component: Post,
      props: true,
    },
  ],
});
