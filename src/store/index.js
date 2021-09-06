import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    posts: []
};
const mutations = {};
const actions = {};
const getters = {};

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
});