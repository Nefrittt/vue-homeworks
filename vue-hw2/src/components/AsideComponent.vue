<template>
   <aside :class="theme">Sidebar</aside>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
   data() {
      return {}
   },
   props: ["theme"],
})
</script>

<style scoped></style>
