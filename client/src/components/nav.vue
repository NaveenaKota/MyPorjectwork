<script setup lang="ts">
import { endSession, getUser, session } from '../models/session';
import router from '../router';

if(!session.loggedIn) router.push('./login');

const avatar = getUser().avatar;

const logout = () => {
	endSession();
	router.push('./login');
}

</script>

<template>
	<div class="contain">
		<h1 class="title">T A S K S</h1>
		<div class="content">
			<img :src="avatar">
			<button class="button" @click="logout">Log Out</button>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.contain {
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: end;

	.title {
		position: absolute;
		left: 50%;
		transform: translateX(-50%);
		margin: 0;
		font-weight: 900;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 30px;

		img {
			margin-right: 30px;
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
	}
}
</style>