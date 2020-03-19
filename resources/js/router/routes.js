import {
   Home,
   Login,
   Register,
   Dashboard
} from '@/pages'

export default [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    {
        path: '/register',
        name: 'register',
        component: Register
    },
    {
        path: '/board',
        name: 'board',
        component: Dashboard
    }

]
