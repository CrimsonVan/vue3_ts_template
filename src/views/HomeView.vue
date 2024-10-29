<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
function test(args: any) {
  console.log(args)
}
test('hello')
</script>

<template>
  <main>
    <TheWelcome />
  </main>
</template>
