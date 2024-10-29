<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
function test(args: any) {
  console.log(args)
}
test('hello')
// console.log(bbbbb)
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
