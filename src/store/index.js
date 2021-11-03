import Vue from 'vue';
import Vuex from 'vuex';
import * as cookies from '@/utils/cookies';
import { loginUser } from '@/api/auth';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        token: cookies.getAuthFromCookie() || '',
        username: cookies.getUserFromCookie() || '',
    },
    getters: {
        isLogin(state) {
            return state.username != '';
        },
    },
    mutations: {
        setUsername(state, username) {
            state.username = username;
        },
        setToken(state, token) {
            state.token = token;
        },
    },
    actions: {
        async LOGIN({ commit }, userData) {
            const { data } = await loginUser(userData);
            commit('setToken', data.token);
            commit('setUsername', data.user.username);
            cookies.saveAuthToCookie(data.token);
            cookies.saveUserToCookie(data.user.username);
            return data;
        },
    },
});
