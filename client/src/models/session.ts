import { reactive } from 'vue';

import { IUser, users } from './user';

export interface ISession {
	username: string | null;
	loggedIn: boolean;
	avatar: string;
}

export const session = reactive<ISession>({
	loggedIn: false,
	username: null,
	avatar: '',
});

export const startSession = async (username: string, password: string) => {
	const body = JSON.stringify({ username, password });
	const req = await fetch('http://localhost:3001/api/users/login', {
		method: 'POST',
		body,
	});
	const res = await req.json();

	console.log(res);
};

export const setSesion = (username: string) => {
	session.username = username;
	session.loggedIn = true;
};

export const endSession = () => {
	session.username = null;
	session.loggedIn = false;
};

export const getUser = (): IUser => {
	return users.filter(u => u.username === session.username)[0];
};
