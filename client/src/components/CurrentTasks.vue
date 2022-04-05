<template>
<h1>Current Tasks</h1>
<div class="post"
        v-for="(post, index) in posts"
        :item="post"
        :index="index"
        :key="post.id"
        v-on:dblclick="deletePost(post._id)"
      >
        {{ `${post.createdAt.getDate()}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}` }}
        <br>
        {{`due to ${post.createdAt.getDate() + 1}/${post.createdAt.getMonth()}/${post.createdAt.getFullYear()}`}}
        <p class="text">{{ post.text }}</p>
      </div>
</template>

<script>
import PostService from '../PostService';
export default {
  name: 'Tasks',
  data() {
    return {
      posts: [],
      error: '',
      text: ''
    }
  },
  async created() {
    try {
      this.posts = await PostService.getPosts();
    } catch(err) {
      this.error = err
    }
  },
  methods: {
    async createPost() {
      await PostService.insertPost(this.text)
      this.posts = await PostService.getPosts()
    },
    async deletePost(id) {
      await PostService.deletePost(id)
      this.posts = await PostService.getPosts()
    }
  }
}
</script>
<style>
    div.post {
    position: relative;
    border: 1px solid #5bd658;
    background-color: #bcffb8;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
    cursor:pointer;
    }
</style>