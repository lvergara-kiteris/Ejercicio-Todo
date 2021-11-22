<template>
<transition name="modal-animation">
  <div v-show="modalActive" class="modal">
    <div class="modal-inner">

        <!-- Contenido del Modal -->
        <slot />

      <button class="button-guardar" @click="close" type="button">Guardar</button>
      <button class="button-salir" @click="close" type="button">Salir</button>

    </div>
  </div>
</transition>
</template>

<script>
export default {
    props: ['modalActive'],
    setup (props, { emit }) {
      const close = () => {
        emit('close')
      }
        return {
          close
        }
    }
}
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

  .modal-inner{
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: white;
    padding: 60px 10px;
    border-radius: 7px;
    box-shadow: 0 3px 20px rgba(0,0,0,0.9);
    display: inline;
  }

  .button-guardar{
    background-image: -webkit-linear-gradient(top, #32118f, #4c98c7);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    border: 1px solid blue;
    box-shadow: 6px 5px 24px #666666;
    bottom: 30%;
    left:71%;
    height:30px;
    position: absolute;
  }

.button-salir{
    background-image: -webkit-linear-gradient(top, #c0c0c0, #ffffff);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 6px 5px 24px #666666;
    bottom: 30%;
    left:60%;
    height:30px;
    position: absolute;
}

  .button:hover {
  background: #2079b0;
  background-color: #008CBA;
  color: white;
  }

</style>
