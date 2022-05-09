import { reactive } from 'vue';

export interface IUser {
	username: string;
	avatar: string;
}

export const users = reactive<IUser[]>([]);