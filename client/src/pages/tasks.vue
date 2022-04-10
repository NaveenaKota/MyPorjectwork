<script setup lang="ts">
import NavBar from '../components/nav.vue';
import { getUser, session } from '../models/session';
import { ITask, sortTasks, tasks } from '../models/tasks';
import { current } from '../models/views';

const getTasks = () => {
	if(!session.loggedIn) return [];

	let ret: ITask[] = [];

	switch (current.value) {
		case 0:
			ret = tasks.value.filter(e => e.for === getUser().username);
			break;
		case 1:
			ret = tasks.value.filter(e => e.by === getUser().username);
			break;
		case 2:
			ret = tasks.value;
			break;
	}

	return sortTasks(ret);
};

const check = (task: ITask) => task.done = !task.done;

</script>

<template>
	<NavBar />
	<div class="content">
		<div class="task card" v-for="task in getTasks()" :key="task.title">
			<button class="button" @click="check(task)">{{ task.done ? '✘' : '✔' }}</button>
			<div class="bar">
				<div>
					FOR
					<span>{{task.for}}</span>
				</div>
				<div>
					BY
					<span>{{task.by}}</span>
				</div>
				<div>
					DUE
					<span>{{task.date}}</span>
				</div>
			</div>
			<div class="title">{{task.title}}</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.content {
	background-color: rgb(231, 237, 240);
	position: absolute;
	top: 100px;
	bottom: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 40px;

	.card {
		width: 50%;
		height: 110px;
		margin-top: 10px;

		button {
			position: absolute;
			top: 20px;
			left: 20px;
			padding: 5px;
			height: 24px;
			width: 24px;
		}

		.bar {
			position: absolute;
			top: 20px;
			left: 60px;
			right: 20px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;
			font-size: 12px;
			font-weight: 500;

			span {
				margin-left: 10px;
				font-size: 12px;
				font-weight: 500;
				background-color: #FF40E4;
				border-radius: 20px;
				padding: 2px 10px;
				color: white;
			}
		}

		.title {
			position: absolute;
			top: 60px;
			left: 60px;
			font-size: 24px;
		}
	}
}
</style>