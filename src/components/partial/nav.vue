<template>
  <ul class="nav nav-list">
    <li class="nav-list-item" v-for="(value, key) in themeConfig.menu" :key="key">
      <router-link :to="value" class="nav-list-link">{{ key.toUpperCase() }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'appNav',
  computed: {
    themeConfig() {
      return this.$store.state.themeConfig;
    },
  },
};
</script>
