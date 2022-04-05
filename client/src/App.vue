<template>
  <Nav />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import Tasks from "./components/Tasks.vue"
import Nav from "./components/Nav.vue"
export default {
  name: "App",
  components: {
    Nav,
    Tasks,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>