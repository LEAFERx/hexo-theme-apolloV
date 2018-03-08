// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

/* eslint-disable no-new */
/* eslint-disable no-console */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: () => {
    // add post routes
    store.dispatch('initialize').then(() => {
      const routes = store.state.postlist.map(({ path }) => (
        {
          path,
          component: () => import('@/components/post'),
          props: { path },
        }));
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
