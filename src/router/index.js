import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import index from '@/components/index';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  base: '/vuetest/',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      beforeEnter: (to, from, next) => {
        if (to.query.path) {
          next(to.query.path);
        } else {
          next();
        }
      },
    }],
  scrollBehavior(to) {
    if (to.hash) {
      return {
        selector: to.hash,
      };
    }
    return {
      x: 0,
      y: 0,
    };
  },
});
