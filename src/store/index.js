import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

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
      return new Promise((resolve) => {
        // get config and postlist
        axios.all([axios.get('/api/config.json'), axios.get('/api/postlist.json')])
          .then(axios.spread((config, postlist) => {
            commit('setConfig', {
              siteConfig: config.data.siteConfig,
              themeConfig: config.data.themeConfig,
            });
            commit('storePostlist', postlist.data);
          }))
          .then(resolve);
      });
    },
  },
});

export default store;

