import { createStore } from 'vuex'

const state = {
  posts: [{
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
],
}
const mutations = {}
const actions = {}
const getters = {}

export default createStore({
  state,
  mutations,
  actions,
  getters,
})
