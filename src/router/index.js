import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue';
import Register from '../pages/Register.vue';
import Error from '../pages/Error.vue';

const routes = [
    {
        path: '/',
        component: Home  
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/:pathMatch(.*)*',
        component: Error
  }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router