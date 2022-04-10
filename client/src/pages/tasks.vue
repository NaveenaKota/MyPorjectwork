<script setup lang="ts">
import NavBar from '../components/nav.vue';
import { getUser } from '../models/session';
import { ITask, sortTasks, tasks } from '../models/tasks';
import { current } from '../models/views';

const getTasks = () => {
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

</script>

<template>
	<NavBar />
	<div class="content">
		<div class="task" v-for="task in getTasks()">{{ task.title }}</div>
	</div>
</template>

<style lang="scss" scoped>.content {
	background-color: rgb(231, 237, 240);
	position: absolute;
	top: 100px;
	bottom: 0;
	left: 0;
	right: 0;
}</style>