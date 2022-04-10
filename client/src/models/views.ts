import { reactive, ref } from 'vue';

export const views = reactive(["FOR ME", "BY ME", "ALL"]);

export const current = ref(0);

export const setCurrent = (v: string) => {
	const i = views.findIndex(e => e === v);
	current.value = i;
};