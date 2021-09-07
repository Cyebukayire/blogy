<template>
    <div class="blog-post">
        <img src="../assets/code2.jpeg" alt="Man">
        <p class="category">
            New
        </p>
        <div class="text-content">
            <h1>{{post.title}}</h1>
            <h2 class="post-title">{{post.body}}</h2>
            <Button @click="onUpdate(post.id)" class="btn update-btn" text="Update" />
            <Button @click="onDelete(post.id)" class="btn delete-btn" text="Delete" />
             <router-link class="btn" to="/postDetails">Read More</router-link>
            <div class="tags">
                <a href="#">#Webdesign</a>
            </div>
        </div> 
    </div>
        <!-- <div class="blog-post">
        <img src="../assets/code2.jpeg" alt="Man">
        <p class="category">
            New
        </p>
        <div class="text-content">
            <h1>Lorem ipsum dolor sit amet.</h1>
            <h2 class="post-title">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, officiis?</h2>
            <router-link class="btn" to="/postDetails">Read More</router-link>
            <Button @click="onDelete(post.id)" class="btn update-btn" text="Update" />
            <Button @click="onDelete(post.id)" class="btn delete-btn" text="Delete" />
            <div class="tags">
                <a href="#">#Webdesign</a>
            </div>
        </div> 
    </div> -->
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
        },
        methods: {
            onDelete(id) {
                this.$emit('delete-post', id)
            },
            onUpdate(id) {
                console.log(`Updating the post: ${id}`)
            }
        },
    }
</script>