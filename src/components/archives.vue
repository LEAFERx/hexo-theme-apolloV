<template>
  <section>
    <div class="archive">
      <template v-for="(post, index) in postlist">
        <h2 class="archive-year"
            v-if="yearChange(index)"
            :key="post.date">
          {{ post.date | moment('YYYY') }}
        </h2>
        <div class="post-item" :key="post.path">
          <div class="post-info">{{ post.date | moment('MMM DD, YYYY') }}</div>
          <router-link :to="post.path" class="post-title-link">{{ post.title }}</router-link>
        </div>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: 'index',
  computed: {
    postlist() {
      return this.$store.state.postlist;
    },
  },
  methods: {
    yearChange(index) {
      if (index === 0) {
        return true;
      }
      const postlist = this.$options.computed.postlist.call(this);
      return postlist[index].date.slice(0, 4)
             !== postlist[index - 1].date.slice(0, 4);
    },
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$store.commit('setView', 'archives');
    });
  },
};
</script>

