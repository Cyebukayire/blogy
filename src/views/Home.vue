<template>
  <Header />
  <Navbar />
  <div class="container" >
  <Posts :posts="posts"/>
  </div>
  <Pagination />
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Posts from '../components/Posts.vue'
import Pagination from '../components/Pagination.vue'

    export default {
        name: 'Home',
        components: {
            Header,
            Navbar,
            Posts,
            Pagination
        },
        data() {
            return {
            posts: []
            }
        },

        methods: {
            async fetchPosts() {
            const res = await fetch('https://jsonplaceholder.typicode.com/posts')

            const data = await res.json()
            
            return data
            },
            async fetchPost(id) {
            const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

            const data = await res.json()
            
            return data
            }
        },

        async created() {
            this.posts = await this.fetchPosts()
        }
    }

</script>

<style scoped>

</style>