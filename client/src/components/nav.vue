<script setup lang="ts">
import router from '../router';
import { endSession, getUser, session } from '../models/session';
import { current, views, setCurrent } from '../models/views';
import { users } from '../models/user';
import { ref } from 'vue';
import { tasks } from '../models/tasks';

if(!session.loggedIn) router.push('./login');

const logout = () => {
	endSession();
	router.push('./login');
}

const avatar = getUser().avatar;

const classView = (v: string) => v === views[current.value] ? 'view current' : 'view';

const modalState = ref<boolean>(false);

const modalClass = (modalState: boolean): string => modalState ? 'modal is-active' : 'modal';

const title = ref('');
const tfor = ref('');
const date = ref('');

const addTask = () => {
	if(!session.username) return;
	tasks.value.push({
		by: session.username,
		date: date.value,
		done: false,
		for: tfor.value,
		title: title.value
	});
	title.value = "";
	tfor.value = "";
	date.value = "";
	modalState.value = false;
}

</script>

<template>
	<div class="contain">
		<h1 class="title">T A S K S</h1>
		<button class="button add" @click="()=>modalState = true">
			<span class="icon is-small">
				<i class="fa-solid fa-plus"></i>
			</span>
			<span>Add Task</span>
		</button>
		<div class="content">
			<img :src="avatar">
			<button class="button" @click="logout">
				<span class="icon is-small">
					<i class="fa-solid fa-right-from-bracket"></i>
				</span>
				<span>Log Out</span>
			</button>
		</div>
		<div class="views">
			<div :class="classView(view)" v-for="view in views" @click="setCurrent(view)">{{view}}</div>
		</div>
	</div>

	<div :class="modalClass(modalState)">
  	<div class="modal-background" @click="()=>modalState=false"></div>
  	<div class="modal-content">
  	  <div class="card">
				<h1>Add Task</h1>
				<input class="input is-normal" type="text" placeholder="Title" v-model="title" />

				<div class="dropdown is-hoverable">
					<div class="dropdown-trigger">
						<div class="field">
							<div class="control">
								<input class="input is-normal" type="search	" placeholder="For" v-model="tfor" />
							</div>
						</div>
					</div>
					<div class="dropdown-menu" id="dropdown-menu" role="menu">
						<div class="dropdown-content">
								<a href="#" class="dropdown-item" v-for="user in users" @click="()=>tfor=user.username">{{user.username}}</a>
						</div>
					</div>
				</div>

				<input class="input is-normal" type="date" placeholder="Date" v-model="date" />
				<button class="button is-normal" @click="addTask">
					<span class="icon is-small">
						<i class="fa-solid fa-plus"></i>
					</span>
					<span>Add</span>
				</button>
			</div>
  	</div>
  	<button class="modal-close is-large" aria-label="close" @click="()=>modalState=false"></button>
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
			height: 50px;
			width: 100px;
			margin: 0 40px;
			display: flex;
			border-radius: 5px;
			align-items: center;
			justify-content: center;
			background-color: white;

			&:hover {
				color: rgb(46, 46, 46);
				border: solid 2px #FF40E4;
			}
		}

		.current {
			color: rgb(46, 46, 46);
			border: solid 2px #FF40E4;
		}
	}

	.add {
		position: absolute;
		left: 20%;
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

.modal-content {
	width: 500px;
	height: 600px;
	.card {
		display: flex;
		height: 100%;
		width: 100%;
		background-color: white;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		h1 {
			font-size: 24px;
			font-weight: 500;
			margin-bottom: 20px;
		}

		.dropdown.is-hoverable {
			width: 80%;

			.dropdown-trigger {
				width: 100%;

				input {
					width: 100%;
				}
			}
		}

		input {
			margin-top: 20px;
			width: 80%;
		}

		button {
			margin-top: 20px;
			width: 80%;
		}
	}
}
</style>