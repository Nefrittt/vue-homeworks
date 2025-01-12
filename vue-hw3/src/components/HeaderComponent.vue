<template>
  <div :class="theme">
    <button @click="changeColor">Change theme</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue"
defineOptions({ name: "HeaderComponent" })

export interface IChildEmits {
  (e: "parent-theme", value: string): void
}

const theme = ref("dark")
const emits = defineEmits<IChildEmits>()

watch(theme, (value) => {
  emits("parent-theme", value)
})

const changeColor = (): void => {
  theme.value = theme.value === "dark" ? "light" : "dark"
}
</script>

<style scoped>
div {
  text-align: center;
}
</style>
