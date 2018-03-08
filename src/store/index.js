import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';

Vue.use(Vuex);
Vue.use(VueResource);

const store = new Vuex.Store({
  state: {
    siteConfig: {},
    themeConfig: {},
    postlist: [],
  },
  mutations: {
    setConfig(state, payload) {
      state.siteConfig = payload.siteConfig;
      state.themeConfig = payload.themeConfig;
    },
    storePostlist(state, payload) {
      state.postlist = payload;
    },
  },
  actions: {
    initialize({ commit }) {
      // eslint-disable-next-line
      return new Promise((resolve, reject) => {
        // get config
        Vue.resource('/api/config.json').get()
          .then((res) => {
            commit('setConfig', {
              siteConfig: res.body.siteConfig,
              themeConfig: res.body.themeConfig,
            });
          })
          .then(
            // get postlist and init routes
            Vue.resource('/api/postlist.json').get,
          )
          .then((res) => {
            commit('storePostlist', res.body);
          })
          .then(resolve);
      });
    },
  },
});

export default store;

