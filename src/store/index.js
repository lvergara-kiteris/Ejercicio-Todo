import { v4 as uuidv4 } from 'uuid'
import { createStore } from 'vuex'

export default createStore({
  state: {
    allTodos: [],
    alltitles: [],
    allTags: []
  },

  mutations: {
    createTodo (state, { title = '', text = '', init = '', finish = '', category = '' }) {
      state.allTodos.unshift({
        id: uuidv4(),
        title,
        text,
        init,
        finish,
        category
      })
    }
  },
  actions: {
  },
  modules: {
  },

  getters: {
    getTodos: (state, getters) => {
      console.log(state, getters)
      return state.allTodos
    }
  }
})
