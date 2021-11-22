<template>
<transition name="modal-animation">
  <div v-show="modalActive" class="modal">
    <transition name="modal-animation-inner">
      <div  class="modal-inner">
        <!-- Modal Content -->

        <slot />
        <button class="button-guardar" @click="close" type="button" style="float: right;">Guardar</button>
        <button class="button-salir" @click="close" type="button" style="float: right;">Salir</button>
      </div>
    </transition>
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
  .modal{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(26, 26, 26, 0.7);

  }

  .modal-inner{
    max-width: 640px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: white;
    padding: 70px 10px;
    border-radius: 7px;
    box-shadow: 0 3px 20px rgba(0,0,0,0.9);
  }

  .button-guardar{
    background-image: -webkit-linear-gradient(top, #32118f, #4c98c7);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    border: 1px solid blue;
    box-shadow: 6px 5px 24px #666666;
  }

.button-salir{
    background-image: -webkit-linear-gradient(top, #c0c0c0, #ffffff);
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    width: 100px;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: 6px 5px 24px #666666;

}

  .button:hover {
  background: #2079b0;
  background-color: #008CBA;
  color: white;
  }
</style>
