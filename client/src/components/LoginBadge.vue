<script setup lang="ts">
    import session, { Logout } from "../models/session";
</script>

<template>
    <div class="buttons" v-if="!session.user">
        <router-link class="button is-primary" to="/signup">
            <strong>Sign up</strong>
        </router-link>
        <router-link class="button is-light" to="/login">
            Log in
        </router-link>
    </div>
    <div class="buttons" v-else>
        <div class="avatar">
            <img :src="session.user.pic" />
            <div>
                <strong>{{ session.user.firstName }} {{ session.user.lastName }}</strong> <br />
                <i>{{ session.user.email }}</i>
            </div>
        </div>
        <router-link class="button us-primary" @click="Logout()" to = /login>
            <strong>Log out</strong>
        </router-link>
    </div>
</template>

<style scoped lang="scss">
    .avatar {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: .5em;
        gap: .5em;
        line-height: 1em;

        img {
            width: 48px;
            height: 48px;
            max-height: max-content;
            border-radius: 10%;
            overflow: hidden;
            object-fit: cover;
        }
    }
</style>    