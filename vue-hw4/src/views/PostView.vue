<template>
   <div class="post">
      <div class="post-header">
         <span><b>ID:</b> {{ post.id }}</span>
         <div><b>Title:</b> {{ post.title }}</div>
      </div>
      <h3>Descripton</h3>
      <p>{{ post.body }}</p>
      <div class="btn">
         <button @click="youShure()">Back</button>
      </div>
   </div>
   
</template>

<script setup lang="ts">
import axios from 'axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import type { IPost } from './PostsView.vue';

const route = useRoute()
const router = useRouter()
const post = ref({} as IPost)
const youShure = () => {
   if(confirm("Вы уверены?")) {
      router.back()
   }
}
const getPost = async() => {
   const res = await axios.get<IPost>(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
   post.value = res.data 
}

onMounted(() => {
   getPost()
})
</script>

<style scoped>
.post {
   width: 800px;
   margin-inline: auto;
}
.post-header {
   display: flex;
   justify-content: space-between;
   margin-bottom: 20px;
   color: darkgreen;
   font-size: large;
}
h3 {
   text-align: center;
   font-size: 20px;
   font-weight: 700;
}
b {
   font-size: 20px;
   color: darkgray;
}
.btn {
   display: flex;
   justify-content: end;
   padding: 20px 0px;
}

</style>