import { createStore } from 'vuex'
import { dataService } from '../shared/data.service'
import { GET_POSTS } from './mutation-types'

const state = {
  posts: [],
}


const mutations = {
  [GET_POSTS](state, posts) {
    state.posts = posts;
  },
};

const actions = {
  async getPostsAction({commit}) {
    const posts = await dataService.fetchPosts();
    commit(GET_POSTS, posts);
  },
};

const getters = {}

export default createStore({
  state,
  mutations,
  actions,
  getters,
})
