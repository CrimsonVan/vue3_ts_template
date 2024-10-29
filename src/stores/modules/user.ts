import { ref } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'
export const useNumStore = defineStore(
  'num',
  () => {
    //身份信息
    const userInfo = ref()
    const getUserInfo = async (id: number) => {
      const res = await axios.post('http://47.109.186.26:3008/users/getUserInfo', {
        user_id: id
      })
      userInfo.value = res.data.data
    }
    const clearUserInfo = () => {
      userInfo.value = null
    }
    //主题颜色
    const curTheme = ref('#55c9c9')
    const isDark = ref(false)
    const num = ref(9)
    const changeNum = () => {
      num.value++
    }
    return {
      num,
      changeNum,
      userInfo,
      curTheme,
      isDark,
      getUserInfo,
      clearUserInfo
    }
  },
  {
    persist: true
  }
)
