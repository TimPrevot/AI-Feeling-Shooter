import { createStore } from 'vuex'
import stack from './modules/stack'
import axios from "axios";
import {server} from "../helper";



const store = createStore({
    state:{
        user: localStorage.getItem('user'),
    },
    modules: {
        stack,
    },
    mutations: {
        setUser(state, user){
            state.user = user;
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
                   commit('setUser', response.data );
                   localStorage.setItem('user', JSON.stringify(response.data));
           }).catch((err) => {
               console.log(err)
           });

        },

        async register({dispatch},data){
            axios
                .post(`${server.baseURL}/api/users/register`, data)
                .then((response) =>{
                    dispatch('login',response.data)
            }).catch((err) => {
                console.log(err)
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