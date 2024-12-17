<template>
  <div class="about">
    <!-- <InputOptionsAPI /> -->
    <InputCompositionAPI />
  </div>
</template>

<script setup lang="ts">
import InputCompositionAPI from "@/components/InputCompositionAPI.vue"
import InputOptionsAPI from "@/components/InputOptionsAPI.vue"
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
