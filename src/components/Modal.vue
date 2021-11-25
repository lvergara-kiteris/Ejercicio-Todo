<template>
  <div class="modal" @click.self="$emit('on:close')">

    <div class="modal-container">
      <slot name="header" />
      <slot name="body" />
      <slot name="footer" />
    </div>

  </div>
</template>

<script>
export default {

  emits: ['on:close'],

    setup () {
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
  box-sizing: content-box;
  width: 100%;
}

.modal-container{
  max-width: 640px;
  width: 80%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: white;
  padding: 60px 10px;
  border-radius: 7px;
  box-shadow: 0 3px 20px rgba(0,0,0,0.9);
}
</style>
