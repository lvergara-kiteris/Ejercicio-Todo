<template>
  <div class="principal">
    <div class="logo">MO</div>
    <br />
    <div class="contenedor">
      <div class="scroll">
        <button type="button" class="button-scroll">JUN 01</button>
        <button type="button" class="button-scroll">JUN 02</button>
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
<span class = "category">{{selectCategory}}</span>

        <section class="timeline">
          <ul class="ul-class">
            <li class="li-class" v-for="todo in getTodos" :key="todo.id">
              <div>

              <time>{{ todo.title}}</time>
              <br>
                    {{ todo.text }}
              </div>
            </li>

          </ul>
        </section>
      </div>
    </div>

    <button class="addEntryButtom" @click="isOpen = true">
      <i class="fa fa-2x fa-plus"></i>
    </button>
  </div>

  <!-- Modal -->
  <modal v-if="isOpen" @on:close="isOpen = false">
    <template v-slot:header>
      <div class="modal-content">
        <h2 class="modal-title">Añada una nueva tarea:</h2>
        <label class="label-titulo">Título</label>
        <input type="text" class="input" v-model="newTodoTitle"/>

        <label class="label-descripcion">Descripción</label>
        <textarea class="textarea" v-model="newTodoText"></textarea>
      </div>
    </template>

    <template v-slot:body>
      <form @submit.prevent = "createTodo(newTodoTitle, newTodoText, selectCategory); isOpen = false">
        <div class="modal-body">
          <span class="selectCat">Seleccione una categoría:</span>
          <br>

          <div class="content-select">
          <select v-model="selectCategory">
            <option>Compras</option>
            <option>Fitness</option>
            <option>Ocio</option>
          </select>
          </div>

        </div>
        <button type="submit" class="button-crear">Crear</button>
      </form>
    </template>
  </modal>
</template>

<script>
import { ref } from 'vue'
import useTodos from '../composables/useTodos'
import Modal from './Modal.vue'

export default {
  components: { Modal },

  setup () {
    const { modalActive, toggleModal, getTodos, createTodo } = useTodos()

    return {
      modalActive,
      toggleModal,
      getTodos,
      createTodo,

      isOpen: ref(false),
      newTodoTitle: ref(''),
      newTodoText: ref(''),
      selectCategory: ref('')
    }
  }
}
</script>

<style scoped>

.principal {
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
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.9);
}

.modal-title {
  text-align: center;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 18px;
  border-bottom: 1px solid #a3a3a3;
  bottom: 60px;
  background-color: rgb(236, 236, 236);
  padding: 15px;
}
.modal-body {
  position: relative;
  bottom: 25px;
  width: auto;
}

.label-titulo {
  position: relative;
  bottom: 55px;
  font-weight: bold;
}
.input {
  position: relative;
  box-sizing: border-box;
  bottom: 50px;
  font-size: 13px;
}
.label-descripcion {
  position: relative;
  bottom: 40px;
  font-weight: bold;
}
.textarea {
  position: relative;
  bottom: 35px;
  width: auto;
  height: 100px;
  font-size: 13px;
}

.legend {
  font-weight: bold;
}
#icon {
  width: 30px;
  text-align: center;
}

.button-scroll {
  border-radius: 10px;
  background-color: hsla(240, 6%, 93%, 0.212);
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: auto;
  padding: 20px;
  width: 100px;
  cursor: pointer;
  margin: 10px;
}
.button-scroll:hover {
  background-color: #f4511e;
  color: white;
}

input:focus {
  border: 2px solid #000;
  background: #f3f3f3;
}

.checkbox {
  box-shadow: 3px 0 3px 0 rgba(0, 0, 0, 0.2);
}

.modal-content {
  display: flex;
  flex-direction: column;
}

.modal-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.addEntryButtom {
  background-color: #6287ec;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  border: none;
  position: relative;
  bottom: 1px;
  left: 310px;
}

.logo {
  text-align: left;
  color: white;
  font-size: 35px;
  font-weight: bold;
}

.fa {
  color: white;
  font-size: 20px;
}
.title {
  color: #fff;
  text-align: left;
  position: relative;
  left:15px;
  font-size: 20px;
  font-weight: bold;
  font-family: "Courier New", Courier, monospace;
  margin-bottom: 20px;
}
/*  background-color: #35347caf;*/
.card {
  background-color: hsla(240, 6%, 93%, 0.212);
  border-radius: 18px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 9);
  box-sizing: border-box;
  margin: 120px auto;
  max-width: 400px;
  padding: 15px;
  width: 100%;
  position: relative;
  bottom: 95px;
}

.custom-control-label {
  width: 100px;
}
.ocio {
  display: inline-block;
  text-align: left;
}
.contenedor {
  scroll-snap-type: x mandatory;
}

.scroll {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-snap-align: start;
  grid-gap: 5px;
}

.scroll::-webkit-scrollbar {
  display: none;
}

.button-crear {
  background-image: -webkit-linear-gradient(top, #401aa8, #4c98c7);
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
  width: 100px;
  border: 1px solid blue;
  box-shadow: 6px 5px 24px #666666;
  bottom: -5px;
  position: relative;
  height: 30px;
  left: 535px;
}

ul li{
  color: rgba(255, 255, 255, 0.781);
}

.selectCat {
  font-weight: bold;
}
.content-select{
position: relative;
bottom: -5px;
}
.content-select select{
appearance: none;
display: inline-block;
width: 100%;
cursor: pointer;
padding: 2px 10px;
outline: 0;
background: #f0f0f0;
font-size: 15px;
color: rgb(0, 0, 0);
border:2px solid rgba(0,0,0,0.2);
border-radius: 8px;
position: relative;
}
.content-select select:hover{
background: #f5f5f5;
}
.content-select:hover{
margin-top: 15px;
}

.timeline {
  padding-left: 1px;
  font-size: 12px;
  font-family: 'Helvetica';
}
.ul-class {
  position: relative;
  padding-left: 45px;
  list-style: none;

}
.ul-class::before {
  display: inline-block;
  content: '';
  position: absolute;
  top: 0;
  left: 20px;
  width: 52px;
  height: 100%;
  border-left: 2px solid hsla(240, 6%, 93%, 0.212);
}

.li-class{
  position: relative;
  counter-increment: list;
}
.li-class:not(:last-child) {
  padding-bottom: 20px;
}
.li-class::before {
  display: inline-block;
  content: '';
  position: absolute;
  left: 2px;
  height: 100%;
  width: 10px;
}
.li-class::after {
  display: inline-block;
  content: '';
  position: absolute;
  top: 0;
  left: -32px;
  width: 12px;
  height: 12px;
  border: 2px solid hsl(0, 0%, 62%);
  border-radius: 50%;
  background-color: hsl(0, 0%, 62%);
}

.category{
  color: white;
  margin-left: 55px;
  font-size: 17px;
}
</style>
