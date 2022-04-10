import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import Home from '../pages/home.vue';
import Login from '../pages/login.vue';
import Signup from '../pages/signup.vue';
import Tasks from '../pages/tasks.vue';

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
	{
		path: '/tasks',
		component: Tasks,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
	linkActiveClass: 'is-active',
});

export default router;
