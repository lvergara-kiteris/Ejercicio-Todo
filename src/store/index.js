import { v4 as uuidv4 } from 'uuid'
import { createStore } from 'vuex'

export default createStore({
  state: {
    newTodo: '',
    allTodos: [
      { id: '1', titulo: 'compras', text: 'feesfff', categoria: '' }
    ],
    alltitles: [],
    allTags: [
      { name: 'Gym' },
      { name: 'Ocio' },
      { name: 'Compras' }
    ]
  },

  mutations: {

    createTodo (state, text = '') {
      if (text.length <= 1) return

      state.allTodos.push({
        id: uuidv4(),
        text
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
