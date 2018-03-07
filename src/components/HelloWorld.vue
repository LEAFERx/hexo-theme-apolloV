<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>Site Config: </h1>
    <ul>
      <li v-for="(value, key) in siteConfig" :key="key">{{ key }}: {{ value }}</li>
    </ul>
    <h1>Theme Config:</h1>
    <ul>
      <li v-for="(value, key) in themeConfig" :key="key">{{ key }}: {{ value }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
