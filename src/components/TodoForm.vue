<template>
  <div class="principal">
  <div class="logo">MO</div>

<div class="contenedor">
  <div class="scroll">
    <button type="button" class="button-scroll">01 JUN</button>
    <button type="button" class="button-scroll">02 JUN</button>
    <button type="button" class="button-scroll">03 JUN</button>
    <button type="button" class="button-scroll">04 JUN</button>
    <button type="button" class="button-scroll">05 JUN</button>
    <button type="button" class="button-scroll">06 JUN</button>
    <button type="button" class="button-scroll">07 JUN</button>
    <button type="button" class="button-scroll">08 JUN</button>
    <button type="button" class="button-scroll">09 JUN</button>
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

      <h2 class="modal-title">Añada su tarea: </h2>
      <input type="text" class="input">

  <div class="modal-body">
    <fieldset>
      <legend>Elija una categoría</legend>
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
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  left:100px;
  bottom:60px;
  padding-right:200px;
}
.modal-body{
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  padding: 15px;
}

.input{
  position: relative;
  box-sizing: border-box;
  bottom: 20px;
}

#icon{
  width: 30px;
  text-align: center;
}

.button-scroll{
  border-radius: 10px;
  background-color: #35347caf;
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
    justify-content: flex-start;

}

.modal-header{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.addEntryButtom{
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
  background-color: #35347caf;
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
overflow: auto;
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
