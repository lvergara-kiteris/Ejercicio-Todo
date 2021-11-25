import { v4 as uuidv4 } from 'uuid'
import { createStore } from 'vuex'

export default createStore({
  state: {
    allTodos: [

    ],
    alltitles: [],
    allTags: [
      { name: 'Gym' },
      { name: 'Ocio' },
      { name: 'Compras' }
    ]
  },

  mutations: {
    createTodo (state, { title = '', text = '', category = '' }) {
      state.allTodos.unshift({
        id: uuidv4(),
        title,
        text,
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
