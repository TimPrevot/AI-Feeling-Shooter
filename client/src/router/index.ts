import { createRouter, createWebHistory } from 'vue-router';
import HomeDashboardView from '../views/HomeDashboardView.vue';
import Register from '/src/components/Register.vue';
import Login from '/src/components/Login.vue';
import Subscriptions from '/src/views/Subscriptions.vue';

const routes = [
	{
		path: '/',
		name: 'homeDashboardView',
		component: HomeDashboardView,
	},
	{
		path: '/register',
		name: 'register',
		component: Register,
	},
	{
		path: '/login',
		name: 'login',
		component: Login,
	},
	{
		path: '/subscriptions',
		name: 'Subscriptions',
		component: Subscriptions,
	},
];
const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
