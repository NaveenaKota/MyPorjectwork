import { reactive } from 'vue';

import { loginReq, LoginRes } from './request';

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

export const session = reactive<ISession>({...sessionNull});

export const startSession = async (username: string, password: string) => {
	const res: LoginRes = await loginReq(username, password);

	if(res.success !== true)
		return res.errors[0];
	else {
		setSession(res);
		return true;
	}
};

export const setSession = (res: LoginRes) => {
	const { username, token, avatar } = res.data;

	session.avatar = avatar;
	session.token = token;
	session.username = username;

	session.loggedIn = true;

	localStorage.setItem('session', JSON.stringify(session));
};

export const endSession = () => {
	session.avatar = sessionNull.avatar;
	session.loggedIn = sessionNull.loggedIn;
	session.token = sessionNull.token;
	session.username = sessionNull.username;
	
	localStorage.setItem('session', JSON.stringify(session));
};
