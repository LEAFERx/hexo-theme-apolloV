<template>
  <section>
    <ul class="home post-list">
      <li v-for="post in postlist"
          :key="post.path"
          class="post-list-item">
        <article class="post-block">
          <h2 class="post-title">
            <router-link :to="post.path" class="post-title-link">
              {{ post.title }}
            </router-link>
          </h2>
          <div class="post-info">{{ post.date | moment('MMM DD, YYYY') }}</div>
          <div class="post-content" v-html="post.excerpt"></div>
          <router-link :to="post.path" class="read-more">...more</router-link>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
import imgLoadAni from '@/utils/img-load-animation';

export default {
  name: 'index',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
    };
  },
  computed: {
    siteConfig() {
      return this.$store.state.siteConfig;
    },
    themeConfig() {
      return this.$store.state.themeConfig;
    },
    postlist() {
      return this.$store.state.postlist;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('setView', 'index');
    });
  },
  updated: imgLoadAni,
};
</script>

