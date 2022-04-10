<script setup lang="ts">
import { endSession, getUser, session } from '../models/session';
import router from '../router';
import { current, views, setCurrent } from '../models/views';
import { ref } from 'vue';

if(!session.loggedIn) router.push('./login');

const logout = () => {
	endSession();
	router.push('./login');
}

const avatar = getUser().avatar;

const classView = (v: string) => v === views[current.value] ? 'view current' : 'view';

</script>

<template>
	<div class="contain">
		<h1 class="title">T A S K S</h1>
		<div class="content">
			<img :src="avatar">
			<button class="button" @click="logout">Log Out</button>
		</div>
		<div class="views">
			<div :class="classView(view)" v-for="view in views" @click="setCurrent(view)">{{view}}</div>
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

	.views {
		position: absolute;
		display: flex;
		flex-direction: row;
		align-items: center;
		left: 50%;
		transform: translateX(-50%);

		.view {
			font-weight: 600;
			color: rgb(168, 168, 168);
			cursor: pointer;
			height: 80px;
			width: 140px;
			display: flex;
			align-items: center;
			justify-content: center;
		}

		.current {
			color: rgb(46, 46, 46);
		}
	}

	.title {
		position: absolute;
		left: 5%;
		transform: translateX(-50%);
		margin: 0;
		font-weight: 900;
	}

	.content {
		display: flex;
		flex-direction: row;
		align-items: center;
		margin-right: 60px;
		margin-bottom: 0;

		img {
			margin-right: 30px;
			width: 48px;
			height: 48px;
			border-radius: 50%;
		}
	}
}
</style>