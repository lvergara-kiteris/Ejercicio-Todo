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

      <h2 class="modal-title">Añada su tarea: </h2>
      <input type="text" class="input">

<fieldset>
  <legend>Elija una categoría</legend>
<!--Ocio -->
<div class="custom-control">
  <label>
    <input type="checkbox" name="checkbox-1" class="custom-control-input" value="ocio"/>
    <i id="ocio" class="fa fa-chess" style="color: red;"></i> Ocio
  </label>
</div>

<!--Fitness -->
<div class="custom-control">
  <label>
    <input type="checkbox" name="checkbox-2" class="custom-control-input" value="fitness"/>
    <i id="ocio" class="fa fa-baseball-ball" style="color: green;"></i> Fitness
  </label>
</div>

<!--Compras -->
<div class="custom-control">
  <label>
    <input type="checkbox" name="checkbox-3" class="custom-control-input" value="compras">
    <i id="ocio" class="fa fa-coins" style="color: blue;"></i> Compras
  </label>
</div>

</fieldset>

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

.modal-title{
  text-align: center;
  position: relative;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  left:100px;
  bottom:60px;
  padding-right:200px;
}

.input{
  height: 20px;
  left: 200px;
  right: 200px;
  top:250px;
  position: fixed;
  width:630px;
  border: 1px solid #393939;
  border-radius: 5px 5px 5px 5px;
  color: #393939;
  font-size: 12px;
}

.modal-content{
    display: flex;
    flex-direction:column;
}

.modal-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
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
