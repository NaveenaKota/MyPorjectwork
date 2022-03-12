<script setup lang="ts">
import { Login } from '../models/session';
import { ref } from 'vue';
var handle= ref( '' );
var password= ref( '' );

     function badLogin()
     {
         Login('naveena', 'meme')
     }
     function login()
     {
         Login(handle.value, password.value)
     }
    
</script>

<template>
<div class="columns is-centered">
        <div class="column is-half">
            <div class="section">
                <form class="box">
                    <div class="field">
                        <label class="label">Username</label>
                        <div class="control">
                        <input class="input" v-model="handle">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">Password</label>
                        <div class="control">
                        <input class="input" v-model="password">
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
                     <div>
                        <span> Don't have an account? <router-link to = /signUp class="has-text-link"> Click Here </router-link> to join us. </span>
                    </div>
                </form>
            </div>
        </div>
    </div>   

</template>

<style scoped>

</style>