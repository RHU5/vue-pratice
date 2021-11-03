import store from '@/store';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    // routes: Vue Router에 의해서 컨트롤되는 페이지의 정보를 담는 것
    routes: [
        {
            path: '/',
            redirect: '/login',
        },
        {
            path: '/login',
            component: () => import('@/views/LoginPage'),
        },
        {
            path: '/signup',
            component: () => import('@/views/SignupPage'),
        },
        {
            path: '/home',
            component: () => import('@/views/HomePage'),
            meta: { auth: true },
        },
        {
            path: '/post/:id',
            component: () => import('@/views/PostEditPage'),
            meta: { auth: true },
        },
        {
            path: '*',
            component: () => import('@/views/NotFoundPage'),
        },
    ],
});

router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters.isLogin) {
        alert('인증이 필요합니다');
        next('/login');
        return;
    }
    next();
});

export default router;
