<template>
  <Posts />
  <Footer />
</template>

<script>
import Posts from './components/Posts.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Posts,
    Footer,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
