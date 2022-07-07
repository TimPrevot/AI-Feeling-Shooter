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
           }).catch((error) => {
               switch (error.code){
                   case "401":
                       console.log("Internal Server error");
                       break;
                   case "200":
                       console.log("sucess");
                       break;
               }
           });

        },

        async register({dispatch},data){
            axios
                .put(`${server.baseURL}/api/users/add/user`, data)
                .then((response) =>{
                    dispatch('login',response.data)
            }).catch((error) => {
                switch (error.code){
                    case "401":
                        console.log("Internal Server error");
                        break;
                    case "200":
                        console.log("sucess");
                        break;
                }
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