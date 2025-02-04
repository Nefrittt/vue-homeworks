<template>
    <div class="posts">
      <div class="post" @click="openPost(post)" v-for="post in posts" :key="post.id">
        {{ post.title }}
      </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"
import axios from "axios"
import { useRouter } from "vue-router"

export interface IPost {
  userId?: number 
  id?: number 
  title?: string 
  body?: string 
}
export interface IPostsDTO {
  data?: IPost[]
}
const posts = ref([] as IPost[])
async function getPosts(url:string,) {
  try {
    const res = await axios.get<IPostsDTO>(url)
    posts.value = res.data as IPost[]
  } catch (e) {
    console.error(e)
  }
}
const router = useRouter()

const openPost = (post: IPost) => {
  router.push({
    name: 'post',
    params: {
      id: post.id,
    }
  })
}


onMounted(() => {
  getPosts('https://jsonplaceholder.typicode.com/posts')
})
</script>

<style scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
}
.post {
  width: 100%;
  border: 1px solid white;
  padding: 5px;
}
</style>