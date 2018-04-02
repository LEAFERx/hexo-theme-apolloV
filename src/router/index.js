import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

import index from '@/components/index';
import archives from '@/components/archives';

Vue.use(Router);
Vue.use(Meta);

const router = new Router({
  mode: 'history',
  base: '/',
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
    },
    {
      path: '/archives/',
      name: 'archives',
      component: archives,
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

export default router;
