import { reactive } from 'vue';

import { loginReq, LoginRes } from './request';
import { IUser, users } from './user';

export interface ISession {
	avatar: string | null;
	loggedIn: boolean;
	token: string | null;
	username: string | null;
}

const sessionNull: ISession = {
	avatar: null,
	loggedIn: false,
	token: null,
	username: null,
}

export const session = reactive<ISession>(sessionNull);

export const startSession = async (username: string, password: string) => {
	const res: LoginRes = await loginReq(username, password);

	if(res.success !== true)
		return res.errors[0];
	else {
		setSesion(res);
		return true;
	}
};

export const setSesion = (res: LoginRes) => {
	const { username, token, avatar } = res.data;

	session.avatar = avatar;
	session.token = token;
	session.username = username;

	session.loggedIn = true;
};

export const endSession = () => {
	session.avatar = sessionNull.avatar;
	session.loggedIn = sessionNull.loggedIn;
	session.token = sessionNull.token;
	session.username = sessionNull.username;
};

export const getUser = (): IUser => {
	return users.filter(u => u.username === session.username)[0];
};
