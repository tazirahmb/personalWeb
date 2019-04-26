import Vue from 'vue';
import Router from 'vue-router';

import Home from './screens/home.vue';
import Post from './screens/post.vue';

import Feed from './components/feed.vue';
import Markdown from './components/vuemarkdown.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/page=1',
    },
    {
      path: '/page=:page',
      name: 'home',
      component: Home,
      props: true
    },
    {
      path: '/post/:postSlug',
      name: 'post',
      component: Post,
      props: true,
    },
    {
      path: '/feed',
      name: 'feed',
      component: Feed,
    },
    {
      path: '/md',
      name: 'markdown',
      component: Markdown,
    },
  ],
});
