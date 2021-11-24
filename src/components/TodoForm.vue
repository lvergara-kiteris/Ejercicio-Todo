<template>
  <div class="principal">
  <div class="logo">MO</div>
  <br>
<div class="contenedor">
  <div class="scroll">
    <button type="button" class="button-scroll">JUN 01</button>
    <button if="boton" type="button" class="button-scroll">JUN 02</button>
    <button type="button" class="button-scroll">JUN 03</button>
    <button type="button" class="button-scroll">JUN 04</button>
    <button type="button" class="button-scroll">JUN 05</button>
    <button type="button" class="button-scroll">JUN 06</button>
    <button type="button" class="button-scroll">JUN 07</button>
    <button type="button" class="button-scroll">JUN 08</button>
    <button type="button" class="button-scroll">JUN 09</button>
  </div>

  <div class="card">
    <div class="title">TODAY TASKS</div>
  </div>
</div>

  <button class="addEntryButtom" @click.prevent="toggleModal">
    <i class="fa fa-2x fa-plus"></i>
  </button>

<modal @close="toggleModal" :modalActive="modalActive">
  <div class="modal-content">

      <h2 class="modal-title">Añada una nueva tarea: </h2>

      <label class="label-titulo">Título</label>
      <input type="text" class="input">

      <label class="label-descripcion">Descripción</label>
      <textarea class="textarea"></textarea>

  <div class="modal-body">
    <fieldset>
      <legend class="legend">Elija una categoría</legend>
<!--Ocio -->
    <div class="custom-control">
      <label>
        <input class="checkbox" type="checkbox" name="checkbox-1" value="ocio"/>
        <i id="icon" class="fa fa-chess" style="color: #f5365c;"></i> Ocio
      </label>
    </div>

<!--Fitness -->
<div class="custom-control">
  <label>
    <input class="checkbox" type="checkbox" name="checkbox-2" value="fitness"/>
    <i id="icon" class="fa fa-baseball-ball" style="color: #00c821;"></i> Fitness
  </label>
</div>

<!--Compras -->
<div class="custom-control">
  <label>
    <input class="checkbox" type="checkbox" name="checkbox-3" value="compras">
    <i id="icon" class="fa fa-coins" style="color: #0086c0;"></i> Compras
  </label>
</div>

</fieldset>
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
 /* height: 60vh;
  width: 100vw; */
  height: auto;
  width: auto;
  padding: 50px;
  background: #05021d;
  border-radius: 5%;

  margin: 120px auto;
  max-width: 400px;
  padding: 25px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.9);
}

.modal-title{
  text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #a3a3a3;
  bottom:60px;
  background-color: rgb(236, 236, 236);
  padding: 15px;
}
.modal-body{
  position: relative;
  bottom: 25px;
  width:auto;
}

.label-titulo{
  position: relative;
  bottom: 55px;
  font-weight: bold;
}
.input{
  position: relative;
  box-sizing: border-box;
  bottom: 50px;
}
.label-descripcion{
  position: relative;
  bottom: 40px;
  font-weight: bold;
}
.textarea{
  position: relative;
  bottom: 35px;
  width:auto;
  height:100px;
}

.legend{
font-weight: bold;
}
#icon{
  width: 30px;
  text-align: center;
}

.button-scroll{
  border-radius: 10px;
  background-color: hsla(240, 6%, 93%, 0.212);
  border: none;
  color: #FFFFFF;
  text-align: center;
  font-size: auto;
  padding: 20px;
  width: 100px;
  cursor: pointer;
  margin: 10px;
}
.button-scroll:hover {
      background-color: #f4511e;;
      color: white;
 }

input:focus {
  border: 2px solid #000;
  background: #F3F3F3;
}

.checkbox{
box-shadow: 3px 0 3px 0 rgba(0,0,0,0.2);
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

.addEntryButtom{
  background-color: #6287ec;;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  position: relative;
  bottom: 1px;
  left: 310px;
}

.logo{
  text-align: left;
  color: white;
  font-size: 35px;
  font-weight: bold;
}

.fa{
  color: white;
  font-size: 20px;
}
.title{
  color: #fff;
  text-align: left;
  font-size: 20px;
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
}
/*  background-color: #35347caf;*/
.card {
  background-color: hsla(240, 6%, 93%, 0.212);
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
.contenedor{
  scroll-snap-type: x mandatory;
}

.scroll{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-align: start;
  grid-gap: 5px;

}

.scroll::-webkit-scrollbar{
  display: none;
}
</style>
