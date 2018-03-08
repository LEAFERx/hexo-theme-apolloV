// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(VueResource);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created: () => {
    store.dispatch('initialize').then(() => {
      store.state.postlist.forEach(({ path }) => {
        // eslint-disable-next-line
        console.log(`asd`);
        router.addRoutes({
          path,
          components: () => import('@/components/post'),
        });
      });
    });
  },
});
