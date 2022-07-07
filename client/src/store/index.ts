import { createStore } from 'vuex'
import stack from './modules/stack'
import axios from "axios";
import {server} from "../helper";
import router from "../router";



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
            if (state.user){
                state.user.isLoggedIn = true;
            }
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

        },

        async register({dispatch},data){
           axios
                .post(`${server.baseURL}/api/users/register`, data)
                .then((response) =>{
                    console.log(response.data);
                    dispatch('login',response.data);
            }).catch((err) => {
                console.log(err);
            });

            await router.push("/");
        },

        logout({commit}){
            commit('clearUser')
            localStorage.removeItem('user')
        }
    },
    plugins:[],



})

export default store