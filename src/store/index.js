import { createStore } from 'vuex'
import dataService from '../shared'
import GET_POSTS from './mutation-types'

const state = {
  posts: [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
],
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
