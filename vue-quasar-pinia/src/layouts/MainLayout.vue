<template>
 <div>
    <div>Direct store</div>
    <div>{{ store.counter }}</div>
    <div>{{ store.doubleCount }}</div>
    <q-btn @click="store.counter--">-</q-btn>
    <q-btn @click="store.increment()">+</q-btn>

    <hr>

  <div class="m-4 border border-black p-4 flex flex-col w-[25%]">
    <h1 class="text-xl capitalize font-bold">nba all-time top five</h1>
    <h2 class="text-sm"> <span class="font-bold">PG:</span>  {{ nbaStore.PG }}</h2>
    <h2 class="text-sm"> <span class="font-bold">SG:</span>  {{ nbaStore.SG }}</h2>
    <h2 class="text-sm"> <span class="font-bold">SF:</span>  {{ nbaStore.SF}}</h2>
    <h2 class="text-sm"> <span class="font-bold">PF:</span>  {{ nbaStore.PF }}</h2>
    <h2 class="text-sm"> <span class="font-bold">C:</span>  {{ nbaStore.C}}</h2>
    <button class="mt-2 text-white bg-teal-300 p-2 rounded-sm" @click="nbaStore.changeGuard('Stephen Curry')">Guard Change</button>
    <button class="mt-2 text-white bg-teal-300 p-2 rounded-sm" @click="nbaStore.$reset">Reset</button>
  </div>
  <!-- <IndexPage></IndexPage> -->
 </div>
</template>

<script>
import { defineComponent,createApp} from 'vue'
// import IndexPage from 'src/pages/IndexPage.vue';
import { useCounterStore } from 'stores/counter';
import {useNbaPlayers} from 'stores/nbaPlayers';
import App from 'src/App.vue'
import {createPinia} from 'pinia'


const pinia = createPinia()
const app = createApp(App)
app.use(pinia)

export default defineComponent({
  name: 'MainLayout',
  setup() {
    const store = useCounterStore();
    const nbaStore = useNbaPlayers();
    return{
      store,
      nbaStore
    }
  },

  // components: {
  //   IndexPage
  // },

})
</script>
