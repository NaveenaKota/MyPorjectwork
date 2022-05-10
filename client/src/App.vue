<script setup lang="ts">
import { ISession, session } from './models/session';

const rawCred = localStorage.getItem('session');

if(rawCred !== null) {
	const storedSession: ISession = JSON.parse(rawCred);
	session.username = storedSession.username;
	session.token = storedSession.token;
	session.avatar = storedSession.avatar;
	session.loggedIn = storedSession.loggedIn;
}
</script>

<template>
		<router-view />
</template>

<style lang="scss">
</style>