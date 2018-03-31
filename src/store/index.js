import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    root: null,
    siteConfig: {},
    themeConfig: {},
    postlist: [],
    currentPost: {},
    cache: {},
    loading: false,
    loadingContent: true,
  },
  mutations: {
    setRoot(state, root) {
      state.root = root;
    },
    setConfig(state, payload) {
      state.siteConfig = payload.siteConfig;
      state.themeConfig = payload.themeConfig;
    },
    storePostlist(state, payload) {
      state.postlist = payload;
    },
    setCurrent(state, payload) {
      state.currentPost = payload;
    },
    clearCurrent(state) {
      state.currentPost = {};
    },
    addCache(state, payload) {
      state.cache[payload.path] = payload;
    },
  },
  actions: {
    initialize({ commit, state }) {
      return new Promise((resolve) => {
        // get config and postlist
        axios.all([axios.get(`${state.root}api/config.json`), axios.get(`${state.root}api/postlist.json`)])
          .then(axios.spread((config, postlist) => {
            commit('setRoot', config.data.siteConfig.root);
            Promise.all([
              new Promise((r) => {
                commit('setConfig', {
                  siteConfig: config.data.siteConfig,
                  themeConfig: config.data.themeConfig,
                });
                r();
              }),
              new Promise((r) => {
                commit('storePostlist', postlist.data);
                r();
              }),
            ]);
          }))
          .then(resolve);
      });
    },
    getPost({ commit, state }, path) {
      if (state.cache[path]) {
        commit('setCurrent', state.cache[path]);
      } else {
        axios.get(`${state.root}api/${path}index.json`)
          .then((res) => {
            Promise.all([
              new Promise((r) => {
                commit('setCurrent', res.data);
                r();
              }),
              new Promise((r) => {
                commit('addCache', res.data);
                r();
              }),
            ]);
          });
      }
    },
  },
});

export default store;
