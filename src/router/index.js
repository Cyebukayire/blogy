import {createRouter, createWebHistory} from 
'vue-router'
import Home from '../views/Home.vue'
import PostDetails from '../views/PostDetails.vue'

const routes = [

    {
        path:'/',
        name: 'Home',
        component: Home,
    },
    {
        path:'/postDetails',
        name: 'PostDetails',
        component: PostDetails,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router