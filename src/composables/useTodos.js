// import { useRouter } from 'vue-router'
import { computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
  // const router = useRouter()
  const store = useStore()

  window.addEventListener('wheel', event => {
  var direction = event.deltaY > 0 ? '0' : '1'
  const tabBar = document.querySelector('.scroll')

  if (direction === '0') {
      tabBar.scrollLeft += 30
  } else {
      tabBar.scrollLeft -= 30
  }
  })

  return {
    // router
    // Methods
    createTodo: (title, text, init, finish, category) =>
                store.commit('createTodo', { title, text, init, finish, category }),
    getTodos: computed(() => store.getters.getTodos)
  }
}

export default useTodos
