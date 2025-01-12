<template>
  <div class="wrapper">
    <HeaderComponent @parent-theme="(e) => (theme = e)" />
    <MainComponent :theme />
    <SidebarComponent :theme />
    <FooterComponent :theme />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue"
import HeaderComponent from "@/components/HeaderComponent.vue"
import MainComponent from "@/components/MainComponent.vue"
import SidebarComponent from "@/components/SidebarComponent.vue"
import FooterComponent from "@/components/FooterComponent.vue"
defineOptions({ name: "CustomCompositionPage" })

const theme = ref("")
</script>

<style>
.wrapper {
  height: 100dvh;
}
.light {
  background-color: var(--vt-c-indigo);
}
.dark {
  background-color: var(--vt-v-black-soft);
}
</style>
