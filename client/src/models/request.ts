import { session } from './session';
import { ITask, tasks } from './tasks';

export interface IRes<T> {
	success: boolean;
	errors: string[];
	data: T;
}

export type LoginRes = IRes<{
	avatar: string;
	token: string;
	username: string;
}>;

export type getTasksRes = IRes<ITask[]>;

export type setTaskRes = IRes<ITask>;

const loginUrl = 'http://localhost:3001/api/users/login';
const getTasksUrl = 'http://localhost:3001/api/posts';

const Auth = () => `JWT ${session.token}`;

export const loginReq = async (username: string, password: string): Promise<LoginRes> => {
	const body = JSON.stringify({ username, password });
	const req = await fetch(loginUrl, {
		method: 'POST',
		body,
		headers: {
			"Content-Type": "application/json"
		}
	});

	return req.json();
}

export const getTasks = async () => {
	const Authorization = Auth();
	const req = await fetch(getTasksUrl, {
		method: 'GET',
		headers: { Authorization }
	});

	const res: getTasksRes = await req.json();

	tasks.value = res.data;
}

export const setTask = async (task: ITask): Promise<setTaskRes> => {
	const Authorization = Auth();
	const body = JSON.stringify(task);
	const req = await fetch(`${getTasksUrl}/${task._id}`, {
		method: 'PATCH',
		body,
		headers: { 
			Authorization,
			"Content-Type": "application/json"
		}
	});

	return req.json();
}
