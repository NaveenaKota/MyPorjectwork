import { reactive } from 'vue';

import { IUser, users } from './user';

export interface ISession {
	username: string | null;
	loggedIn: boolean;
}

export const session = reactive<ISession>({
	loggedIn: false,
	username: null,
});

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
