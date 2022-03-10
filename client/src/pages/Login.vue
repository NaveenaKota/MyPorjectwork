<script setup lang="ts">
import { Login } from '../models/session';
import { ref } from 'vue';
var handle= ref( '' );
var password= ref( '' );
function login() {
  console.log(handle.value," and ", password.value);
    Login(handle.value, password.value);
}

    // function badLogin()
    // {
    //     Login('Naveena', 'meme')
    // }
    // function login()
    // {
    //     Login('naveena', 'password')
    // }
    
</script>

<template>
    <!-- <div class="section">
        <h1 class="title">Login Page</h1>

        <button class="button is-primary" @click="login">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Login</span>
        </button>
        &nbsp;
        <button class="button is-warning" @click="badLogin">
            <span class="icon">
                <i class="fa fa-sign-in"></i>
            </span>
            <span>Bad Login</span>
        </button>

</div> -->
<section class="hero is-primary is-fullheight">
  <div class="hero-body">
    <div class="container">
      <div class="columns is-centered">
        <div class="column is-5-tablet is-4-desktop is-3-widescreen">
          <form action="" class="box">
            <div class="field">
              <label for="" class="label">Email</label>
              <div class="control has-icons-left">
                <input type="email" placeholder="e.g. bobsmith@gmail.com" v-model="handle" class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-envelope"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="label">Password</label>
              <div class="control has-icons-left">
                <input type="password" placeholder="*******" v-model="password"  class="input" required>
                <span class="icon is-small is-left">
                  <i class="fa fa-lock"></i>
                </span>
              </div>
            </div>
            <div class="field">
              <label for="" class="checkbox">
                <input type="checkbox">
               Remember me
              </label>
            </div>
            <div class="field">
              <button class="button is-success" @click="login">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</section>

</template>

<style scoped>

</style>