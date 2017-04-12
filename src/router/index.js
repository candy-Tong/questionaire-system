import Vue from 'vue';
import Router from 'vue-router';
import MyQues from '@/components/MyQues/MyQues';
import Create from '@/components/Create/Create';
import Preview from '@/components/Preview/Preview';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/my-Ques',
            name: 'MyQues',
            component: MyQues
        },
        {
            path: '/create',
            name: 'Create',
            component: Create
        },
        {
            path: '/create/preview/:id',
            name: 'Preview',
            component: Preview
        },
        {
            path: '/create/edit',
            name: 'Edit',
            component: Create
        }
    ]
});
