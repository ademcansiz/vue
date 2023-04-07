<template>
  <q-page class="flex flex-center">
    <h6>{{ fullName }}</h6>
      <q-form class="form" @submit="onSubmit" @reset="onReset" methods="post">
        <q-input
        label="İsminizi Giriniz"
        lazy-rules
        v-model="firstName"
        :rules="[ firstName => firstName && firstName.length > 0 || 'Lütfen isminizi giriniz...']"
        >
        </q-input>
        <q-input
        label="Soy İsminizi Giriniz"
        lazy-rules
        v-model="surName"
        :rules="[ surName => surName && surName.length > 0 || 'Lütfen Soy İsminizi giriniz...']"
        >
        </q-input>

        <div>
        <q-checkbox v-model="film" label="Film" />
        <q-checkbox v-model="dizi" label="Dizi" />
        <q-checkbox v-model="kitap" label="Kitap" />
        <q-checkbox v-model="kahve" label="Kahve" />
        </div>

        <div>
        <q-radio v-model="medeniDurum" val="evli" label="Evli" />
        <q-radio v-model="medeniDurum" val="bekar" label="Bekar" />
        </div>

        <q-select outlined v-model="choose" :options="options" label="İl Seçiniz" />

        <q-toggle v-model="accept" label="Koşulları kabul ediyorum..." />
        <q-btn
        label="Gönder"
        type="submit"
        color="primary"

        ></q-btn>

        <q-btn
        label="Temizle"
        type="reset"
        color="primary"
        flat
        ></q-btn>

      </q-form>
  </q-page>
</template>

<script>
import { defineComponent,ref } from 'vue'

export default defineComponent({
  name: 'IndexPage',
  setup(){
    return{
      baslik:'',
      fullName:ref(' '),
      surName: ref(''),
      film: ref(false),
      dizi: ref(false),
      kitap: ref(false),
      kahve: ref(false),
      medeniDurum: ref(false),
      accept: ref(''),
      choose: ref(null),
      options:['İstanbul','Antalya','Sivas']
    }

  },

  methods:{
    onSubmit(){
      if (this.accept===true) {
        this.fullName=this.firstName + ' ' + this.surName + ' ' + this.film + ' '+ this.dizi + ' '+ this.kitap + ' '+ this.kahve + ' '
      +this.medeniDurum + ' '+ this.choose + ' ' +this.accept
      } else {
        alert('Koşulları kabul ediniz...')
      }
    },
    onReset () {
      this.firstName = null
      this.surName = null
      this.film = false
      this.dizi = false
      this.kitap = false
      this.kahve = false
      this.medeniDurum = false
      this.choose = null
      this.accept = false
      this.fullName=null
      }
  }

})
</script>
