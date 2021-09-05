<template>
    <div class="blog-post">
        <!-- <img v-bind:src="post.image" alt="Man"> -->
        <img src="../assets/code2.jpeg" alt="Man">
        <p class="category">
            New
        </p>
        <div class="text-content">
            <h1>{{post.title}}</h1>
            <h2 class="post-title">{{post.body}}</h2>
            <!-- <Button class="btn" text="Read more" /> -->
            <router-link class="btn" to="/postDetails">Read More</router-link>
            <div class="tags">
                <a href="#">#Webdesign</a>
            </div>
        </div> 
    </div>
</template>

<script>
// import Button from './Button.vue'

    export default {
        name: 'Post',
        props: {
            post: Object,
        },

        components: {
            // Button,
        }
    }
</script>