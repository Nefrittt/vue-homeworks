<template>
  <aside :class="theme">Sidebar</aside>
</template>

<script setup lang="ts">
import type { IParentProps } from "./MainComponent.vue"
const props = defineProps<IParentProps>()
</script>

<style scoped>
aside {
  text-align: center;
}
</style>
