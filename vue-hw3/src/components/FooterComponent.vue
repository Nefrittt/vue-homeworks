<template>
  <footer :class="theme">Footer</footer>
</template>

<script setup lang="ts">
import type { IParentProps } from "./MainComponent.vue"
const props = defineProps<IParentProps>()
</script>

<style scoped>
footer{
  text-align: center;
}
</style>
