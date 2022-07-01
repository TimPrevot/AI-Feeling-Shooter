import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/components/Home.vue'
import Register from '/src/components/Register.vue'
import Login from '/src/components/Login.vue'

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router