import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      beforeEnter: (to, from, next) => {
        if (to.query.path) {
          next(to.query.path);
        } else {
          next();
        }
      },
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound,
    },
  ],
});
