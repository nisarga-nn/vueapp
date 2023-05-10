import {createRouter,createWebHistory} from 'vue-router'
import About from '@/views/About.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory(),
    routes:[
        {
            path:"/",
            name:"home",
            component: Home
        },
        {
            path:"/about",
            name:"about",
            component: About
        }
    ]
})

export default router;