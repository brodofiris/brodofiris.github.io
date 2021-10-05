import { createRouter, createWebHistory } from 'vue-router'
import Projects from '../components/Projects.vue'
import Blog from '../components/Blog.vue'
import Contact from '../components/Contact.vue'

const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            component: Projects
        },
        {
            path: '/blog',
            component: Blog
        },
        {
            path: '/contact',
            component: Contact
        }
    ]
})

export default router