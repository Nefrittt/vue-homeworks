<template>
   <footer :class="theme">Footer</footer>
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
