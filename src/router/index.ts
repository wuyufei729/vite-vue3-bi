//现在创建router的方式与vue2.x的版本已经很不同了
import {createRouter, createWebHashHistory,createWebHistory, RouteRecordRaw} from 'vue-router';
export const constRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('@/views/home/home.vue')
    },

];



const router = createRouter({
    history: createWebHashHistory(), //替代之前的mode，是必须的
    routes: constRoutes
});



export default router;