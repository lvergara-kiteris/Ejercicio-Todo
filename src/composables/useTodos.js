// import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

const useTodos = () => {
  // const router = useRouter()
  const modalActive = ref(false)
  const store = useStore()

  const toggleModal = () => {
  modalActive.value = !modalActive.value
  }

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
    modalActive,
    toggleModal,

    // Methods
    createTodo: (text) => store.commit('createTodo', text),
    getTodos: computed(() => store.getters.getTodos)
  }
}

export default useTodos
