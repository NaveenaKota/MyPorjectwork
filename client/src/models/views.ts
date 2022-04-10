import { reactive, ref } from 'vue';

export const views = reactive(["FOR ME", "BY ME", "ALL"]);

export const current = ref(views[0]);

export const setCurrent = (v: string) => current.value = v;