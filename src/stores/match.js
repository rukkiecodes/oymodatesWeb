import { defineStore } from "pinia"

export const MatchStore = defineStore({
  id: 'match',
  state: () => ({
    users: []
  })
})