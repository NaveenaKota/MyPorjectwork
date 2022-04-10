<script setup lang="ts">

import { ref } from 'vue';
import { users } from '../models/user';
import router from '../router';

const username = ref('');
const password = ref('');
const confirm = ref('');

const error = ref('error');
const errorText = ref('');

const signup = () => {
	if(username.value === "" || password.value === "" || confirm.value === "") {
		errorText.value = "Some fields are empty";
		return;
	}

	if(password.value !== confirm.value) {
		errorText.value = "Passwords don't match";
		error.value = 'error visible'
		return;
	}

	const { floor, random } = Math;
	const n = floor(random() * 100);

	users.push({
		username: username.value,
		password: password.value,
		avatar: `https://randomuser.me/api/portraits/men/${n}.jpg`
	});

	router.push("./tasks");
	error.value = 'error';
}

</script>

<template>
	<h1 class="title">SIGN UP</h1>
	<img class="ill" src="../assets/signup.svg">
	<div class="btns">
		<input type="text" class="input" name="username" required placeholder="Username" v-model="username">
		<input type="password" class="input" name="password" required placeholder="Password" v-model="password">
		<input type="password" class="input" name="password" required placeholder="Confirm" v-model="confirm">
		<button class="button" type="button" @click="signup">
			<span class="icon is-small">
				<i class="fa-solid fa-user-plus"></i>
			</span>
			<span>Sign Up</span>
		</button>
	</div>
	<p class="error visible">{{errorText}}</p>
</template>

<style lang="scss" scoped>
.error {
	color: red;
	position: absolute;
	top: 67%;
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
	right: 19%;
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