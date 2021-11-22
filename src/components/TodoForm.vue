<template>
  <div class="principal">
  <div class="logo">MO</div>

<div class="contenedor">
  <div class="days"> </div>

  <div class="card">
    <div class="title">TODAY TASKS</div>
  </div>
</div>

  <button class="addEntryButtom" @click.prevent="toggleModal">
    <i class="fa fa-2x fa-plus"></i>
  </button>

<modal @close="toggleModal" :modalActive="modalActive">
  <div class="modal-content">

    <div class="modal-header">
      <h2 class="modal-title">Añada su tarea: </h2>
    </div>

    <div class="modal-body">
      <input type="text" class="form-control"/>
      <p>Elija una categoría:</p>
<div class="card-body">

</div>
<!--Ocio -->
<div class="custom-control">
  <input type="radio" name="custom-radio-1" class="custom-control-input" value="ocio"/>
      <label class="custom-control-label ocio" for="customRadio1">
        <div class="icon-wrapper">
        </div>Ocio
        <i id="ocio" class="fa fa-chess" style="color: red;"></i>
      </label>
</div>
<!--Fitness -->
<div class="custom-control">
  <input type="radio" name="custom-radio-2" class="custom-control-input" value="fitness"/>
      <label class="custom-control-label ocio" for="customRadio1">
        <div class="icon-wrapper">
        </div>Fitness
        <i id="ocio" class="fa fa-baseball-ball" style="color: green;"></i>
      </label>
</div>
<!--Compras -->
<div class="custom-control">
  <input type="radio" name="custom-radio-3" class="custom-control-input" value="compras"/>
      <label class="custom-control-label ocio" for="customRadio1">
        <div class="icon-wrapper">
        </div>Compras
        <i id="ocio" class="fa fa-coins" style="color: blue;"></i>
      </label>
</div>

    </div>
  </div>
</modal>

</div>
</template>

<script>
// import { useRouter } from 'vue-router'
import { ref } from 'vue'
import Modal from './Modal.vue'
export default {
  components: { Modal },

  setup () {
    // const router = useRouter()
    const modalActive = ref(false)
    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return {
      // router
      modalActive,
      toggleModal
    }
  },

  methods: {

  }
}
</script>

<style scoped>

.principal{
  position: relative;
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  padding: 50px;
  background: #232023;
  border-radius: 5%;

  margin: 120px auto;
  max-width: 400px;
  padding: 25px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.9);
}

.modal-content{
    display: flex;
    flex-direction:column;
}

button{
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: 100%;
  width: 60px;
  height: 60px;
}

.logo{
  text-align: left;
  color: white;
  font-size: 35px;
  font-weight: bold;
}

.title{
  color: #fff;
  text-align: left;
  font-size: 25px;
  font-family: 'Courier New', Courier, monospace;
}

.card {
  background: #1F2022;
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 9);
  box-sizing: border-box;
  margin: 120px auto;
  max-width: 400px;
  padding: 25px;
  text-align: center;
  width: 100%;
}

.custom-control-label{
  width: 100px;

}
.ocio{
  display: inline-block;
  text-align: left;
}

</style>
