<script setup lang="ts">

import { ref } from 'vue';
import { setSesion } from '../models/session';
import { users } from '../models/user';
import router from '../router';

const username = ref('');
const password = ref('');

const error = ref('error');
const errorText = ref('');

const login = () => {
	if(username.value === "" || password.value === "") {
		errorText.value = "Some fields are empty";
		return;
	}

	const valid = users.filter(u => u.username === username.value && u.password === password.value).length > 0;

	if(!valid) {
		errorText.value = "Credentials are incorrect";
		error.value = 'error visible'
		return;
	}

	setSesion(username.value);

	router.push("./tasks");
	error.value = 'error';
}

</script>

<template>
	<h1 class="title">Log In</h1>
	<img class="ill" src="../assets/login.svg">
	<div class="btns">
		<input type="text" class="input" name="username" placeholder="Username" v-model="username">
		<input type="password" class="input" name="password" placeholder="Password" v-model="password">
		<button class="button" @click="login">
			<span class="icon is-small">
				<i class="fa-solid fa-right-to-bracket"></i>
			</span>
			<span>Log In</span>
		</button>
	</div>
	<p class="error visible">{{errorText}}</p>
</template>

<style lang="scss" scoped>
.error {
	color: red;
	position: absolute;
	top: 64%;
	right: 24%;
	display: none;
}
.visible {
	display: unset;
}
.title {
	position: absolute;
	top: 27%;
	transform: translate(-50%, -50%);
	right: 21%;
	font-size: 48px;
}
.btns {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	right: 15%;

	button, input {
		width: 250px;
		margin-top: 30px;
	}
}
.ill {
	position: absolute;
	width: 700px;
	top: 50%;
	transform: translateY(-50%);
	left: 10%;
}
</style>