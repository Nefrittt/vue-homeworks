<template>
   <nav class="main-menu">
      <div>
         <RouterLink active-class="active-link" class="link" :to="{name: 'main'}">Main</RouterLink>
         <RouterLink active-class="active-link" class="link" :to="{name: 'posts'}">Posts</RouterLink>
      </div>
      <div>
         <button @click="$router.back()">Back</button>
         <button @click="$router.forward()">Forward</button>
      </div>
   </nav>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main-menu {
   display: flex;
   justify-content: space-between;
   width: 100%;
   padding: 20px;
   background-color: rgb(60, 62, 62);
   margin-bottom: 20px;
}
.link {
   padding: 5px 16px;
   font-size: large;
   font-weight: 500;
   font-variant: small-caps;
   border-radius: 6px;
}
.active-link {
   color: darkred;
}
</style>