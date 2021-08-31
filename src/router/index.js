import {createRouter, createWebHistory} from 
'vue-router'
import Post from '../views/Post.vue'
const routes = [
    {
        path:'/post',
        name: 'Post',
        components: Post,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router