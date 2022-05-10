<script setup lang="ts">

import { ref } from 'vue';
import { startSession } from '../models/session';
import router from '../router';

const username = ref('');
const password = ref('');

// error element class
const error = ref('error');
// error text
const errorText = ref('');

const login = async () => {
	if(username.value === "" || password.value === "") {
		errorText.value = "Some fields are empty";
		return;
	}

	const res: boolean | string = await startSession(username.value, password.value);

	if(res !== true) {
		errorText.value = res;
		error.value = 'error visible'
		return;
	}

	router.push("./tasks");
	error.value = 'error';
}

</script>

<template>
	<h1 class="title">LOG IN</h1>
	<img class="ill" src="../assets/login.svg">
	<div class="btns">
		<div class="field">
			<p class="control has-icons-left">
				<input type="text" class="input" name="username" placeholder="Username" v-model="username">
				<span class="icon is-small is-left">
					<i class="fa-solid fa-user"></i>
				</span>
			</p>
		</div>
		<div class="field">
			<p class="control has-icons-left">
			<input type="password" class="input" name="password" placeholder="Password" v-model="password">
				<span class="icon is-small is-left">
					<i class="fa-solid fa-key"></i>
				</span>
			</p>
		</div>
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
	width: 250px;
	text-align: center;
	position: absolute;
	top: 64%;
	right: 21.5%;
	display: none;
}
.visible {
	display: unset;
}
.title {
	position: absolute;
	top: 27%;
	transform: translate(-50%, -50%);
	right: 20%;
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
		margin-bottom: 30px;
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