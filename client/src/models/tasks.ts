import { ref } from 'vue';

export interface ITask {
	_id: string;
	by: string;
	date: string;
	done: boolean;
	title: string;
	for: string;
}

export const tasks = ref<ITask[]>([]);

export const sortTasks = (e: ITask[]): ITask[] =>
	e.sort((a, b) => {
		if (a.done && !b.done) return 1;
		if (!a.done && b.done) return -1;
		return 0;
	});
