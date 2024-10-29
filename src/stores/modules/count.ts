import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useCountStore = defineStore(
  'count',
  () => {
    const num = ref(9)
    const changeNum = () => {
      num.value++
      console.log(a)
    }
    return {
      num,
      changeNum
    }
  },
  {
    persist: true
  }
)
