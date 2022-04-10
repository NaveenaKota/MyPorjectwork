import { reactive } from 'vue';

interface IUser {
	username: string;
	password: string;
	avatar: string;
}

export const users = reactive<IUser[]>([
	{
		username: "Naveena",
		password: "Naveena",
		avatar: "https://randomuser.me/api/portraits/women/6.jpg"
	}
]);