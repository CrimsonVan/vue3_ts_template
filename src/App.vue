<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useCountStore } from './stores/modules/count'
const countStore = useCountStore()
const changeColor = () => {
  countStore.changeNum()
}
changeColor()
// console.log(x)
</script>
<template>
  <RouterView></RouterView>
</template>
