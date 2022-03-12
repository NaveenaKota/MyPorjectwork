<script setup lang="ts">
import { ref } from 'vue';
import { RouterLink } from "vue-router";
import LoginBadge from './LoginBadge.vue';

const isOpen = ref(false);
</script>

<template>
  <nav class="navbar is-info" role="navigation" aria-label="main navigation">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="https://to-do-cdn.microsoft.com/webapp/38cce120a00363d6d88c924546055c873aae9c159c1b4d9ec724687af6112fd9/preview.png" width="112" height="28" />
        </a>
        <a
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          :class="{ 'is-active': isOpen }"
          @click="isOpen = !isOpen"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div class="navbar-menu" :class="{ 'is-active': isOpen }">
        <div class="navbar-start">
          <router-link class="navbar-item" to="/">Home</router-link>
          <router-link class="navbar-item" to="/assignedtasks">All Tasks</router-link>
           <router-link class="navbar-item" to = /Issues>
             Report an Issue
           </router-link>
          <!-- <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">Tasks</a>
            <div class="navbar-dropdown">
              <router-link class="navbar-item" to="/assignedtasks">Tasks Assigned</router-link>
             </div>
          </div> -->
          
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <login-badge></login-badge>
          </div>
         
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
</style>