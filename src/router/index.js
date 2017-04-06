import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import Create from '@/components/Create/Create';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/my-Ques',
            name: 'Hello',
            component: Hello
        },
        {
            path: '/Create',
            name: 'Create',
            component: Create
        }
    ]
});
