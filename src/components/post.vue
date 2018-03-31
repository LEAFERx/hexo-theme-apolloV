<template>
  <div class="post">
    <article class="post-block">
      <h1 class="post-title">{{ postTitle }}</h1>
      <div class="post-content" v-html="postContent"></div>
    </article>
  </div>
</template>

<script>
export default {
  name: 'post',
  computed: {
    postTitle() {
      return this.$store.state.currentPost.title;
    },
    postContent() {
      return this.$store.state.currentPost.content;
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.dispatch('getPost', to.path);
    });
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit('clearCurrent');
    next();
  },
};
</script>
