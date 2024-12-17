<template>
  <input @keyup="change" type="text" />
  <div class="inputValue">
    {{ inputTest }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  name: "InputOptionsAPI",
  data() {
    return {
      inputTest: "",
    }
  },
  methods: {
    change(event: Event) {
      this.inputTest = (event.target as HTMLInputElement).value
    },
  },
})
</script>

<style scoped>
input {
  display: block;
  margin-right: 40px;
}
</style>
