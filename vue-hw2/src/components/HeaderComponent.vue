<template>
   <header :class="theme">
      <button @click="changeTheme">Change color</button>
   </header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
   data() {
      return {
         theme: "blackTheme",
      }
   },
   emits: ["changed"],
   methods: {
      changeTheme(): void {
         this.theme == "blackTheme"
            ? (this.theme = "whiteTheme")
            : (this.theme = "blackTheme")
      },
   },
   watch: {
      theme(value) {
         this.$emit("changed", value)
      },
   },
})
</script>

<style>
header {
   display: flex;
   justify-content: center;
   width: 100%;
   padding: 20px;
}
</style>
