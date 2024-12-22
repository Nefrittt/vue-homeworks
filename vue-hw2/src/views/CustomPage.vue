<template>
   <div>
      <HeaderComponent @changed="theme = $event" />
      <MainSection :theme="theme" />
      <AsideComponent :theme="theme" />
      <FooterComponent :theme="theme" />
   </div>
</template>

<script lang="ts">
import AsideComponent from "@/components/AsideComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
import HeaderComponent from "@/components/HeaderComponent.vue"
import MainSection from "@/components/MainSection.vue"
import { defineComponent } from "vue"

export default defineComponent({
   components: {
      HeaderComponent,
      MainSection,
      AsideComponent,
      FooterComponent,
   },
   data() {
      return {
         theme: "",
      }
   },
})
</script>

<style scoped>
div {
   display: flex;
   flex-direction: column;
   gap: 20px;
}
.whiteTheme {
   background-color: #fff;
   color: black;
}
.blackTheme {
   background-color: var(--color-background);
   color: var(--color-text);
}
</style>
