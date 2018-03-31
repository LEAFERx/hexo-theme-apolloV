<template>
  <div class="copyright">
    <p>© {{ yearInfo }} <a :href="this.$store.state.themeConfig.url">{{ this.$store.state.themeConfig.author }}</a>, powered by <a href="https://hexo.io" target="_blank">Hexo</a> and <a href="https://github.com/LEAFERx/hexo-theme-vue-test" target="_blank">hexo-theme-vuetest</a>.</p>
  </div>
</template>

<script>
export default {
  name: 'copyright',
  computed: {
    yearInfo() {
      const currentDate = new Date();
      const year = currentDate.getFullYear();
      const startyear = this.$store.state.themeConfig.startyear;
      return !startyear || year === startyear ? year : `${startyear} - ${year}`;
    },
  },
};
</script>

