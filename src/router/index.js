import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld'),
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
    {
      path: '*',
      name: 'NotFound',
      component: () => import('@/components/NotFound'),
    },
  ],
});
