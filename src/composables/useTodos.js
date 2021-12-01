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
/*
const sortList = () => {
  // eslint-disable-next-line camelcase
  var ul = document.getElementById('idUl')

  var lista = ul.getElementsByTagName('li')

  var arrayLista = Array.from(lista)
  console.log(arrayLista)
  // arrayLista.sort((a, b) => a.textContent.localeCompare(b.textContent)).forEach(li => ul.appendChild(li))
arrayLista.sort(function (a, b) {
  return a.init - b.init
})
  console.log(arrayLista)
}
*/

function compare () {
  var ul = document.getElementById('idUl')
  var li = document.createElement('li')
  var array = ul.getElementsByTagName('li')
  for (var i = 0; i < array.length; i++) {
    array.push(array[i])
    console.log(array.sort())
    li.appendChild(array[i])
  }
  ul.appendChild(li)
}

  return {

    // router
    compare,
    // Methods
    createTodo: (title, text, init, finish, category) =>
                store.commit('createTodo', { title, text, init, finish, category }),
    getTodos: computed(() => store.getters.getTodos)
  }
}

export default useTodos
