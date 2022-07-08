import { createStore } from 'vuex';
import stack from './modules/stack';
import axios from 'axios';
import { server } from '../helper';
import router from '../router';

const store = createStore({
	state: {
		user: localStorage.getItem('user'),
		sentiment: {},
	},
	modules: {
		stack,
	},
	getters: {
		getSentiment(state) {
			return state.sentiment;
		},
	},
	mutations: {
		setUser(state, user) {
			state.user = user;
		},

		clearUser(state) {
			state.user = null;
		},
		setSentiment(state, data) {
			state.sentiment = data;
		},
	},
	actions: {
		async login({ commit }, data) {
			axios
				.post(`${server.baseURL}/api/auth/login`, data)
				.then((response) => {
					commit('setUser', response.data.loggedUser);
					localStorage.setItem(
						'user',
						JSON.stringify(response.data.loggedUser)
					);
				})
				.catch((err) => {
					console.log(err.status);
				});
			await router.push('/');
		},

		async register({ dispatch }, data) {
			axios
				.post(`${server.baseURL}/api/users/register`, data)
				.then((response) => {
					dispatch('login', response.data);
				})
				.catch((err) => {
					console.log(err.status);
				});

			await router.push('/');
		},

		async subscribe(data) {
			axios
				.patch(`${server.baseURL}/api/users/modify_rank`, data)
				.then((response) => {
					console.log(response.data);
					return response.data;
				})
				.catch((err) => {
					console.log(err.status);
				});
		},

		async getSentiment({ commit }) {
			axios
				.get(`${server.baseURL}/api/predictions/tweets/repartition`)
				.then((response) => {
					commit('setSentiment', response.data);
				})
				.catch((err) => {
					console.log(err.status);
				});
		},

		logout({ commit }) {
			commit('clearUser');
			localStorage.removeItem('user');
		},
	},
	plugins: [],
});

export default store;
