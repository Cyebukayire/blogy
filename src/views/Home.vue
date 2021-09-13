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
import { mapActions, mapState } from 'vuex'

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
            ...mapActions(['getPostsAction']),

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
                    console.log("Post: ", id, "deleted")
                }
            }
        },

        async created() {
            // this.posts = await this.fetchPosts()
            await this.$store.dispatch('getPostsAction')
            // await this.getPostsAction;
        },
        computed: {
            ...mapState({ posts: 'posts' })
            // posts() {
            //     return this.$store.state.posts 
            // },
        },
    }

</script>