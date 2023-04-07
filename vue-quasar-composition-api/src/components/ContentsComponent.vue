<template>
  <div v-for="content in contents" :key="content.id">
    {{ content.title }}
  </div>
  <br><br><hr><br><br>
  <div v-for="onlyinfo in info" :key="onlyinfo.id">
    {{ onlyinfo.username }}
  </div>
</template>
<script>
import { defineComponent, ref } from 'vue'
import getUsers from "../composables/getUsers"
export default defineComponent({
  props:['contents'],
  setup() {
    const {users,info,error} =getUsers();
    users();
    return {info,error}
  },
})
</script>
<style>
</style>
