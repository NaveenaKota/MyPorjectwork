import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '../pages/Home.vue';
import Generic from '../pages/Generic.vue';
import Login from '../pages/Login.vue';
import Tasks from '../components/Tasks.vue'
import CurrentTasks from '../components/CurrentTasks.vue'
import completed from '../components/CompletedTask.vue'
import SignUp from '../pages/SignUp.vue';
import Issues from '../pages/Issue.vue';
import session from "../models/session";

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/home', component: Home },
  { path: '/login', component: Login },
  { path: '/signup', component: SignUp },
  { path: '/Issues', component: Issues },
  { path: '/Issues', component: SignUp },
  { path: '/Issues/submit', component: SignUp },
  // { path: '/assignedtasks', component: Tasks },
  {path: '/tasks', component:Tasks},
  {path: '/CurrentTasks', component:CurrentTasks},
  {path: '/Completed', component:completed}

]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkActiveClass: 'is-active',
})

router.beforeEach((to, from) => {
    if (['/wall','/assignedtasks','/feed','/home'].includes(to.path)) { // list of paths that require login
        if (!session.user) {
            return '/login';
        }
    }
})

export default router;