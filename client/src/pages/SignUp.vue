<script setup lang="ts">
    import { RouterLink } from 'vue-router';
    import { ref } from 'vue';
    import { Signup } from '../models/session';

    var fName= ref( '' );
    var lName= ref( '' );
    var handle= ref( '' );
    var password= ref( '' );
    var email= ref( '' );

    function signup()
    {
        Signup(fName.value, lName.value, handle.value, password.value, email.value);
    }
</script>

<template>
    <div class="columns">
        <div class="column">
            <div class="section">
                <div class="title">
                    New User 
                </div>
                <form class="box" >
                    <div class="field">
                        <label class="label">firstName</label>
                        <div class="control">
                        <input class="input" v-model="fName">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">lastName</label>
                        <div class="control">
                        <input class="input" v-model="lName">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">handle</label>
                        <div class="control">
                        <input class="input" v-model="handle">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">password</label>
                        <div class="control">
                        <input class="input" v-model="password">
                        </div>
                    </div>

                    <div class="field">
                        <label class="label">email</label>
                        <div class="control">
                        <input class="input" v-model="email">
                        </div>
                    </div>

                    <button class="button is-primary"  @click="signup">Sign Up</button>
                    <div>
                        <span> Already have an account? <router-link to = /login class="has-text-link"> Click Here </router-link> to Login </span>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>