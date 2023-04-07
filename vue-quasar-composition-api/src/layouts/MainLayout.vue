<template>
  <q-layout >
   <div>
    <p>{{ info }} - {{ job.name }}</p>
    <q-btn @click="clicked" >Click</q-btn>
    <input type="text" v-model="info">
   </div>
   <br><br><hr><br><br>
   <input type="text" v-model="search" name="" id="">
   <div v-for="day in finded" :key="day">
    {{day}}
   </div>
   <q-btn @click="watchStop">Watch Stop</q-btn>
   <br><br><hr><br><br>
   <Contents :contents="contents"></Contents>
  </q-layout>
</template>

<script>
import { defineComponent, ref,reactive, computed, watch,onMounted} from 'vue'
import Contents from "../components/ContentsComponent"
export default defineComponent({
  name: 'MainLayout',
  components: {
    Contents,
  },

  setup () {
      console.log("setup yüklendi ilk setup yüklenir");

      onMounted(()=>{
        console.log("mounted yüklendi createdten sonra yüklenir");
      })

      let info  = ref("Selamun aleyküm")
      let job = reactive({name:"software developer"})
      const clicked = ()=>{
      console.log("click oldu");
      info.value = "aleyküm selam";
      job.name = "frontend developer"
      console.log(info,info.value);
      }

      const days = ref(["Pazartesi","Salı","Çarşamba","Perşembe","Cuma"]);
      const search = ref("");
      const finded = computed(() => {
      return days.value.filter((day) => day.includes(search.value))
    })

      const watchStop = watch(search,()=>{
        console.log("watch çalıştı");
      })

      const contents = ref([
        {id:1,title:"Deneme 1",details:"Detail 1"},
        {id:2,title:"Deneme 2",details:"Detail 2"},
        {id:3,title:"Deneme 3",details:"Detail 3"},
        {id:4,title:"Deneme 4",details:"Detail 4"},
      ])
      return{clicked,info,job,days,search,finded,watchStop,contents}
  },
  created(){
    console.log("created yüklendi setuptan sonra yüklenir");
  },


})
</script>
