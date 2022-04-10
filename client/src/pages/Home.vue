<script setup lang="ts">

import router from '../router';

const loginClick = () => {
	router.push('/login');
}

const signupClick = () => {
	router.push('/signup');
}

</script>

<template>
	<h1 class="title">TODO APP</h1>
	<h2 class="subtitle">Create and manage tasks with ease</h2>
	<img class="ill" src="../assets/todo.svg">
	<div class="btns">
		<button class="button" @click="loginClick">
			<span class="icon is-small">
				<i class="fa-solid fa-right-to-bracket"></i>
			</span>
			<span>Log In</span>
		</button>
		<button class="button" @click="signupClick">
			<span class="icon is-small">
				<i class="fa-solid fa-user-plus"></i>
			</span>
			<span>Sign Up</span>
		</button>
	</div>
</template>

<style lang="scss" scoped>
.title {
	position: absolute;
	top: 27%;
	transform: translate(-50%, -50%);
	right: 16%;
	font-size: 48px;
}
.subtitle {
	position: absolute;
	top: 34%;
	transform: translate(-50%, -50%);
	right: 13.5%;
	font-size: 18px;
	font-weight: 600;
	color: rgb(156, 156, 156);
}
.btns {
	display: flex;
	flex-direction: column;
	position: absolute;
	top: 50%;
	transform: translate(-50%, -50%);
	right: 15%;

	button {
		width: 250px;
		margin-top: 50px;
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