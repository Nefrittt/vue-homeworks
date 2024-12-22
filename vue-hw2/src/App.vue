<script lang="ts">
import { defineComponent } from "vue"
import CustomPage from "./views/CustomPage.vue"

export default defineComponent({
   components: { CustomPage },
})
</script>

<template>
   <CustomPage />
</template>

<style scoped>
* {
   box-sizing: border-box;
   margin: 0;
   padding: 0;
}
</style>
