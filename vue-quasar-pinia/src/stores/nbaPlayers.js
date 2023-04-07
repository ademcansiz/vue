import { defineStore } from 'pinia'

export const useNbaPlayers = defineStore('nbaPlayers', {
  state:()=>({
    PG:'Russel Westbrook',
    SG:'Micheal Jordan',
    SF:'Kobe Braynt',
    PF:'LeBron James',
    C:"Shaquille O'neal",
  }),

  actions:{
    changeGuard(newName){
      this.PG = newName;
      // this.$patch({
      //   PG:newName,
      //   // SG:newSG
      //   // SF:newSF
      //   // gibi çoklu değerleri bu şekilde değiştirebiliyoruz...
      // })
    }
  }

}
)
