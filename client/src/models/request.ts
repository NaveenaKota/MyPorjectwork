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

const loginUrl = 'http://localhost:3001/api/users/login';

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
