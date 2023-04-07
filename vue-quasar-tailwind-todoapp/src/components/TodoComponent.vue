<template>
  <div class="flex justify-between align-center h-6 rounded-xl  hover:bg-teal-400 hover:animate-bounce mb-2" >
    <div  class="capitalize w-[60%] h-6 text-white ml-6" type="text" name="" id="">{{todo.todo}} </div>
    <button @click="$emit('deleteTodo',todo.id)" class="text-white  bg-red-400 rounded-md h-6 align-center w-[20%] mr-4 ">Sil</button>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  props:["todo"]

});
</script>
