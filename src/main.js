// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Transitions from 'vue2-transitions';
import App from './App';
import router from './router';
import store from './store';


Vue.use(Transitions);

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable no-console */
new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>',
  render: h => h(App),
  created: () => {
    // set api root
    store.commit('setRoot', router.options.base);
    // add post routes
    store.dispatch('initialize').then(() => {
      const routes = store.state.postlist.map(({ path }) => (
        {
          path: `/${path}`,
          component: () => import('@/components/post'),
        }));
      routes.push(
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
        });
      routes.push(
        {
          path: '*',
          name: 'NotFound',
          component: () => import('@/components/NotFound'),
        });
      router.addRoutes(routes);
    });
  },
});
