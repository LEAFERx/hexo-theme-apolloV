<template>
  <div id="app">
    <div class="wrap">
      <header>
        <router-link to="/" class="logo-link">
          <img :src="logoPath" alt="logo">
        </router-link>
        <app-nav />
      </header>
      <fade-transition>
        <div v-if="this.$store.state.loadingContent" class="sk-rotating-plane"></div>
      </fade-transition>
      <fade-transition>
        <router-view v-if="!this.$store.state.loadingContent" class="container" />
      </fade-transition>
      <footer>
        <copyright />
      </footer>
    </div>
  </div>
</template>

<script>
import '@/assets/css/apollo.css';

import appNav from '@/components/partial/nav';
import copyright from '@/components/partial/copyright';

import '../node_modules/spinkit/css/spinkit.css';

export default {
  name: 'App',
  components: {
    appNav,
    copyright,
  },
  computed: {
    logoPath() {
      let path = this.$store.state.themeConfig.logo;
      if (/^(https?:\/\/|\/)/.test(path)) {
        path = this.$store.state.root + path;
      }
      return path;
    },
  },
};
</script>

