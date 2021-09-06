<template>
    <!-- <div class="blog-post">
        <img src="../assets/code2.jpeg" alt="Man">
        <p class="category">
            New
        </p>
        <div class="text-content">
            <h1>{{post.title}}</h1>
            <h2 class="post-title">{{post.body}}</h2>
            <Button class="delete-btn" text="Read more" />
            <Button class="edit-btn" text="Read more" />
            <router-link class="btn" to="/postDetails">Read More</router-link>
            <div class="tags">
                <a href="#">#Webdesign</a>
            </div>
        </div> 
    </div> -->
        <div class="blog-post">
        <!-- <img v-bind:src="post.image" alt="Man"> -->
        <img src="../assets/code2.jpeg" alt="Man">
        <p class="category">
            New
        </p>
        <div class="text-content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2 class="post-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, officiis?</h2>
            <router-link class="btn" to="/postDetails">Read More</router-link>
            <Button class="btn update-btn" text="Update" />
            <Button class="btn delete-btn" text="Delete" />
            <div class="tags">
                <a href="#">#Webdesign</a>
            </div>
        </div> 
    </div>
</template>

<script>
import Button from './Button.vue'

    export default {
        name: 'Post',
        props: {
            post: Object,
        },

        components: {
            Button,
        }
    }
</script>