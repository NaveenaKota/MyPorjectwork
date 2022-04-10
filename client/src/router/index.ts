import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../pages/home.vue';
import Login from '../pages/login.vue';
import Signup from '../pages/signup.vue';

const routes: RouteRecordRaw[] = [
	{ path: '/', component: Home },
	{
		path: '/login',
		component: Login,
	},
	{
		path: '/signup',
		component: Signup,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'is-active',
});

export default router;
