import Vue from 'vue';
import Router from 'vue-router';
import MyQues from '@/components/MyQues';
import Create from '@/components/Create/Create';
import Preview from '@/components/Create/Preview';
import Type from '@/components/Create/Type';
import Do from '@/components/Do/Do';
import Grade from '@/components/Do/Grade';

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
        }, {
            path: '/create/type',
            name: 'Type',
            component: Type
        }, {
            path: '/do/:id',
            name: 'Do',
            component: Do
        }, {
            path: '/do/grade',
            name: 'Grade',
            component: Grade
        }
    ]
});
