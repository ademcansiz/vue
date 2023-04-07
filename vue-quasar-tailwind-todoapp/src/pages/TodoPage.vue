<template>
  <div
    class="bg-cyan-500 pb-6 h-full m-8 rounded-xl w-[25rem] flex flex-col justify-center align-center"
  >
    <h3 class="text-center text-gray-100 m-6 font-bold">TodoList</h3>
    <div class="text-center flex flex-col">
      <div class="p-4 flex justify-between">
        <input
          v-model="todoItem"
          class="outline-none p-2 rounded-md w-[72.5%]"
          type="text"
          name=""
          id=""
        />
        <button
          @click="addTodo"
          class="bg-teal-400 w-[22.5%] text-white rounded-md"
        >
          Ekle
        </button>
      </div>
    </div>
    <TodoComponent
      @deleteTodo="deleteTodo($event)"
      v-for="todo in todoList"
      :key="todo.id"
      :todo="todo"
    ></TodoComponent>
  </div>
</template>

<script>
import TodoComponent from "src/components/TodoComponent.vue";
import axios from "axios";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TodoComponent,
  },

  data() {
    return {
      todoList: [],
      todoItem: "",
    };
  },
  methods: {
    addTodo() {
      // this.todoList.push(this.todoItem)
      axios
        .post(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json",
          { todo: this.todoItem }
        )
        .then((response) => {
          this.todoList.push({
            id: response.data.name,
            todo: this.todoItem,
          });
          this.todoItem = "";
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deleteTodo(todoId) {
      axios
        .delete(
          "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos/" +
            todoId +
            ".json"
        )
        .then((response) => {
          let index = this.todoList.findIndex((todo) => {
            return todo.id == todoId;
          });
          this.todoList.splice(index, 1);
          // this.todoList.value=this.todoList.value.filter((item)=>item.id!==todoId)
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    // alert("mounted")
    axios
      .get(
        "https://adem-quasar-todolist-default-rtdb.firebaseio.com/todos.json"
      )
      .then((response) => {
        for (let key in response.data) {
          let todo = {
            id: key,
            todo: response.data[key].todo,
          };
          this.todoList.push(todo);
        }
      });
  },
});
</script>
<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>
