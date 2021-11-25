<template>
  <modal v-if="isOpen" @on:close="closeModal">
    <template v-slot:header>
    </template>

    <template v-slot:body>
    </template>

    <template v-slot:footer>
    </template>

  </modal>
</template>

<script>
import { ref } from 'vue'
import Modal from '../components/Modal.vue'

export default {
  components: { Modal },

  setup () {
    const isOpen = ref(false)

    return {
      isOpen,

      // eslint-disable-next-line no-return-assign
      openModal: () => isOpen.value = true,
      // eslint-disable-next-line no-return-assign
      closeModal: () => isOpen.value = false
    }
  }
}
</script>
