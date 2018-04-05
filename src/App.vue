<template>
  <div id="app">
    <div class="wrap">
      <header>
        <router-link to="/" class="logo-link">
          <img id="logo" :src="logoPath" alt="logo">
        </router-link>
        <app-nav />
      </header>
      <div v-if="this.$store.state.loadingContent" class="loading-warp-content">
        <div class="sk-wave loading-grid-content">
          <div class="sk-rect sk-rect1 loading-element-content"></div>
          <div class="sk-rect sk-rect2 loading-element-content"></div>
          <div class="sk-rect sk-rect3 loading-element-content"></div>
          <div class="sk-rect sk-rect4 loading-element-content"></div>
          <div class="sk-rect sk-rect5 loading-element-content"></div>
        </div>
      </div>
      <transition name="slide-fade">
        <router-view v-if="!this.$store.state.loadingContent" class="container" />
      </transition>
      <footer>
        <paginator />
        <copyright />
      </footer>
    </div>
  </div>
</template>

<script>
import 'normalize.css';
import '@/assets/scss/apollo.scss';

import appNav from '@/components/partial/nav';
import copyright from '@/components/partial/copyright';
import paginator from '@/components/partial/paginator';

import '../node_modules/spinkit/css/spinkit.css';

export default {
  name: 'App',
  components: {
    appNav,
    copyright,
    paginator,
  },
  computed: {
    logoPath() {
      let path = this.$store.state.themeConfig.logo;
      if (/^(https?:\/\/|\/)/.test(path)) {
        return path;
      }
      path = this.$store.state.root + path;
      return path;
    },
  },
};
</script>

<style>
body {
  overflow-y: scroll;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
  border-radius: 2px;
  background-color: #ebebeb;
}

::-webkit-scrollbar-track {
  background-color: #ebebeb;
}

::-webkit-scrollbar-thumb {
  border-radius: 2px;
  background-color: #b2b2b2;
}

.img-load-animation {
  display: flex;
  align-items: center;
  height: 150px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}

.slide-fade-leave-active {
  transition: all 0s;
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}

.loading-warp-main {
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: #42b983;
}

.loading-grid-main {
  width: 120px;
  height: 100px;
}

.loading-element-main{
  background-color: #ffffff !important;
}

.loading-warp-content {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
}

@media screen and (min-height: 900px) {
  .loading-warp-content {
    height: 700px;
  }
}

@media screen and (max-height: 900px) {
  .loading-warp-content {
    height: 450px;
  }
}

.loading-grid-content {
  width: 70px;
  height: 70px;
}

.loading-element-content{
  background-color: #42b983 !important;
}
</style>
