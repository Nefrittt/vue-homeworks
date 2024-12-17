<template>
  <input @keyup="change" type="text" />
  <div class="inputValue">
    {{ inputTest }}
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"

const inputTest = ref("")

const change = (event: Event) => {
  inputTest.value = (event.target as HTMLInputElement).value
}
</script>

<style scoped></style>
