import VueRouter from 'vue-router'
import Error404 from './scenes/errors/404'
import Home from "./scenes/Home";

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
        },
        {
            path: '*',
            name: 'errors.404',
            component: Error404,
        },
    ],
});

export default router;
