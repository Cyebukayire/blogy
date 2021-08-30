<template>
  <Header />
  <Navbar />
  <Posts :posts="posts"/>
  <Pagination />
  <Footer />
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Posts from './components/Posts.vue'
import Pagination from './components/Pagination.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Posts,
    Pagination,
    Footer,
  },
  data() {
    return {
      posts: []
    }
  },

  created() {
    this.posts = [
      {
        id: 1,
        category: "New",
        title: "Loremloremloremloremloremlorem",
        description: "Loremlor emloremloreml oremloreml oremloremloreml oremloremlorem",
        tag: 'Webdesign',
      },
      {
        id: 1,
        category: "New",
        title: "Loremloremloremloremloremlorem",
        description: "Loremlo remloremlorem loremloremlo remloreml oremloremloremlorem",
        tag: 'Webdesign',
      },
      {
        id: 1,
        category: "New",
        title: "Loremloremloremloremloremlorem",
        description: "Loremloremloremloremlorem loremloremloremlo remloremloremlorem",
        tag: 'Webdesign',
      },
      {
        id: 1,
        category: "New",
        title: "Loremloremloremloremloremlorem",
        description: "Loremloremloreml oremloremloremloremloreml oremloremloremlorem",
        tag: 'Webdesign',
      },
    ]
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
}

.btn {
  display: inline-block;
  color: rgb(111, 111, 111);
  border: 3px solid rgba(25, 110, 247, 0.426);
  padding: 10px 20px;
  margin: 5px;
  border-radius: 5px;
  cursor: pointer;
  text-decoration: none;
  font-size: 18px;
  font-family: inherit;
}

.btn:active {
  transform: scale(0.8);
  border: 3px solid rgba(10, 233, 155, 0.303);
}

.btn-block {
  display: block;
  width: 100%;
}

</style>
