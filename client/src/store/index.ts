import { createStore } from 'vuex'
import stack from './modules/stack'
import axios from "axios";
import {server} from "../helper";
import router from "../router";



const store = createStore({
    state:{
        user: localStorage.getItem('user'),
        sentiments:{},
        closes : {}
    },
    modules: {
        stack,
    },
    getters: {
        getSentiments(state){
            return state.sentiments;
        }
    },
    mutations: {
        setUser(state, user){
            state.user = user;
        },

        setRank(state, newRank){
            if (state.user){
                state.user.rank = newRank;
            }
        },

        setSentiments(state, data){
            state.sentiments = data;
        },

        setCloses(state, data){
            state.closes = data;
        },

        clearUser(state){
            state.user = null;
        }
    },
    actions:{
        async login({commit},data){
           axios
               .post(`${server.baseURL}/api/auth/login`, data)
               .then((response) =>{
                   commit('setUser', response.data.loggedUser );
                   localStorage.setItem('user', JSON.stringify(response.data.loggedUser));
           }).catch((err) => {
               console.log(err)
           });
            await router.push("/");

        },

        async register({dispatch}, data){
           axios
                .post(`${server.baseURL}/api/users/register`, data)
                .then((response) =>{
                    dispatch('login',response.data);
            }).catch((err) => {
                console.log(err);
            });

            await router.push("/");
        },

        async subscribe({commit},data){
            axios
                .patch(`${server.baseURL}/api/users/modify_rank`, data)
                .then((response) =>{
                    console.log(response.data);
                }).catch((err) => {
                console.log(err.status);
            });

            commit('setRank', data.newRank);
        },

        async getSentiments({commit}){
            axios
                .get(`${server.baseURL}/api/predictions/tweets/repartition`)
                .then((response) =>{
                      commit('setSentiments', response.data) ;
                }).catch((err) => {
                console.log(err.status);
            });
        },

        async getClose({commit}){
            axios
                .get(`${server.baseURL}/api/predictions/finance1d/get_close`)
                .then((response) =>{
                    commit('setCloses', response.data) ;
                }).catch((err) => {
                console.log(err.status);
            });
        },

        logout({commit}){
            commit('clearUser')
            localStorage.removeItem('user')
        }
    },
    plugins:[],



})

export default store