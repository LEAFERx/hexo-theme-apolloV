<template>
  <div class="paginator" v-if="view === 'post'">
    <router-link v-if="prev" :to="prev" class="prev">上一篇</router-link>
    <router-link v-if="next" :to="next" class="prev">下一篇</router-link>
  </div>
</template>

<script>
export default {
  name: 'paginator',
  computed: {
    prev() {
      return this.$store.state.currentPost.prev ? `/${this.$store.state.currentPost.prev}` : '';
    },
    next() {
      return this.$store.state.currentPost.next ? `/${this.$store.state.currentPost.next}` : '';
    },
    view() {
      return this.$store.state.view;
    },
  },
};
</script>
