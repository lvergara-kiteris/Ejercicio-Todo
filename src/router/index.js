import { createRouter, createWebHistory } from 'vue-router'
import TodoForm from '../components/TodoForm.vue'
import Modal from '../components/Modal.vue'

const routes = [
  {
    path: '/',
    name: 'todoForm',
    component: TodoForm
  },
  {
    path: '/modal',
    name: 'Modal',
    component: Modal
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
