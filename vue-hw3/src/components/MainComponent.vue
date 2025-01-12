<template>
  <div>
    <button @click="howMuchPostsView">{{ buttonName }}</button>
  </div>
  <div class="pagination">
    <button class="button-pag" :disabled="!prev" @click="getPosts(prev)">Prev</button>
    <button class="button-pag" :disabled="!next" @click="getPosts(next)">Next</button>
  </div>
  <section :class="theme" class="posts">
    <template v-for="(post,index) in posts" :key="post.id">
      <div class="post" v-if="index < 10 && buttonName == 'Показать все'">
        <h3>{{ post.id }}</h3>
        <p>{{ post.name }}</p>
      </div>
      <div class="post" v-if="buttonName == 'Показать 10'">
        <h3>{{ post.id }}</h3>
        <p>{{ post.name }}</p>
      </div>
    </template>
  </section>
  
</template>

<script setup lang="ts">
import axios from 'axios'
import { onMounted, ref } from 'vue';


export interface IParentProps {
  theme: string
}
export interface IPost {
  id: number
  name: string
}
export interface IInfo {
  count: number
  pages: number
  next: string 
  prev: string 
}
export interface IPostsDTO {
  info: IInfo
  results: IPost[]
}

const props = defineProps<IParentProps>()
const posts = ref([] as IPost[])
const buttonName = ref('Показать 10')
const baseURL = "https://rickandmortyapi.com/api/character"
const next = ref("")
const prev = ref("")

const getPosts = async(url: string) => {
  try {
    const res = await axios.get<IPostsDTO>(url)
    posts.value = res.data.results
    next.value = res.data.info.next
    prev.value = res.data.info.prev
  } catch (e) {
    console.log(e)
  }
}

const tenPostsView = (): void => {
  buttonName.value = 'Показать все'
  posts.value = posts.value.slice(0,10)
}

const allPostsView = (): void => {
  buttonName.value = 'Показать 10'
  getPosts(baseURL)
}

const howMuchPostsView = (): void => {
  buttonName.value === 'Показать 10' ? tenPostsView() : allPostsView()
}

onMounted(() => {
  getPosts(baseURL)
})
</script>

<style scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin: 20px;
}
.posts {
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
}
.post {
  width: 300px;
  height: 150px;
  text-align: center;
  padding: 20px;
  border: 1px solid var(--vt-c-indigo);
}
.button-pag {
  padding: 12px 24px;
  background-color: transparent;
  border-radius: 8px;
  border: 1px solid var(--vt-c-indigo);
  font-size: 18px;
  color: var(--vt-v-white);
  transition: all 0.6s ease-in-out;
}
.button-pag:hover {
  background-color: var(--vt-c-indigo);
  color: var(--vt-c-black-soft);
}
.button-pag:disabled {
  background-color: grey;
  color: white;
}
</style>
