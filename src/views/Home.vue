<template>
  <Header title="Welcome To Blogy"/>
  <Navbar />
  <div class="container" >
  <Posts @delete-post="deletePost" :posts="posts"/>
  </div>
  <Pagination />
</template>

<script>
import Header from '../components/Header.vue'
import Navbar from '../components/Navbar.vue'
import Posts from '../components/Posts.vue'
import Pagination from '../components/Pagination.vue'
// import mapState from 'vuex'

    export default {
        name: 'Home',
        components: {
            Header,
            Navbar,
            Posts,
            Pagination,
        },
        data() {
            return {
            // posts: []
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
            },

            deletePost(id) {
                if(confirm("The post will be deleted.")){
                    this.posts = this.posts.filter((post) => post.id !== id)
                }
            }
        },

        async created() {
            // this.posts = this.$store.state.posts
        },
        computed: {
            posts() {
                return this.$store.state.posts 
            },
        },
    }

</script>