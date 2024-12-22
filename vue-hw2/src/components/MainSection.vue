<template>
   <main :class="theme">
      <h2>Посты</h2>
      <button
         class="btn"
         @click="
            showAll
               ? ((showAll = false), (show10 = true))
               : ((showAll = true), (show10 = false))
         "
      >
         {{ show10 ? "Показать все" : "Показать 10" }}
      </button>
      <div class="posts__wrapper">
         <div v-if="showAll" v-for="post in posts" class="post">
            <h3>{{ post.id }}</h3>
            <p>{{ post.name }}</p>
         </div>
         <div v-if="show10" v-for="post in posts.slice(0, 10)" class="post">
            <h3>{{ post.id }}</h3>
            <p>{{ post.name }}</p>
         </div>
      </div>
   </main>
</template>

<script lang="ts">
import axios from "axios"
import { defineComponent } from "vue"

export default defineComponent({
   data() {
      return {
         show10: false,
         showAll: true,
         posts: [],
      }
   },
   props: ["theme"],
   methods: {
      async getData(url: string) {
         try {
            const response = await axios.get(url)
            this.posts = response.data.results
         } catch (error) {
            alert(error)
         }
      },
   },
   mounted() {
      this.getData("https://rickandmortyapi.com/api/character")
   },
})
</script>

<style scoped>
h2 {
   text-align: center;
}
.post {
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid var(--vt-c-indigo);
}
.posts__wrapper {
   display: flex;
   flex-direction: column;
   gap: 20px;
}
.btn {
   padding: 8px 16px;
   background-color: aquamarine;
}
</style>
