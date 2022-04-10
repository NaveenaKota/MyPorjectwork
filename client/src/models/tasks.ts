import { ref } from 'vue';

export interface ITask {
	by: string;
	date: string;
	done: boolean;
	title: string;
	for: string;
}

export const tasks = ref<ITask[]>([
	{
		by: 'Naveena',
		date: '10-05-2022',
		done: false,
		title: 'Do ABC',
		for: 'user_1',
	},
	{
		by: 'user_1',
		date: '12-05-2022',
		done: true,
		title: 'Do PQR',
		for: 'Naveena',
	},
	{
		by: 'user_1',
		date: '11-05-2022',
		done: false,
		title: 'Do XYZ',
		for: 'Naveena',
	},
]);

export const sortTasks = (e: ITask[]): ITask[] =>
	e.sort((a, b) => {
		if (a.done && !b.done) return 1;
		if (!a.done && b.done) return -1;
		return 0;
	});
