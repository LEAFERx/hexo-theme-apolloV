import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    siteConfig: null,
    themeConfig: null,
  },
  mutations: {
    getConfig(state, payload) {
      state.siteConfig = payload.siteConfig;
      state.themeConfig = payload.themeConfig;
    },
  },
  actions: {
    getConfig({ commit }) {
      Vue.resource('/api/config.json').get().then((res) => {
        commit('getConfig', {
          siteConfig: res.body.siteConfig,
          themeConfig: res.body.themeConfig,
        });
      }).catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
    },
  },
});

export default store;
