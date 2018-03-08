import Vue from 'vue';
import Router from 'vue-router';
import Meta from 'vue-meta';

Vue.use(Router);
Vue.use(Meta);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/index'),
      beforeEnter: (to, from, next) => {
        if (to.query.path) {
          next(to.query.path);
        } else {
          next();
        }
      },
    },
    // {
    //   path: '/:year(\\d+)/:month(\\d+)/:date(\\d+)/:title/',
    //   name: 'post',
    //   component: () => import('@/components/post'),
    //   props: true,
    // },
  ],
});
