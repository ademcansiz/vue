import {ref} from "vue";
const getUsers = ()=>{
  const info = ref([]);
    const error = ref(null);

    const users = async ()=>{
     try {
      let data = await fetch("https://jsonplaceholder.typicode.com/users")
      info.value=await data.json()
     } catch (error) {
      alert("Verilere erişilemedi!")
    }
    };

    return{users,info,error}
}
export default getUsers
