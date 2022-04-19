import Vue from "vue";
import Router from 'vue-router';
import FirstOjtContent from '../components/FirstOjtContent'
import SecondOjtContent from '../components/SecondOjtContent'
import ThirdOjtContent from '../components/ThirdOjtContent'
import BookList from '../components/BookList'

Vue.use(Router)

const routes = [
    {
        path: '/firstojt',
        name: 'firstojt',
        component: FirstOjtContent
    },
    {
        name: 'secondojt',
        path: '/secondojt/:movies',
        component: SecondOjtContent,
        props: true,
    },
    {
        path: '/thirdojt',
        name: 'thirdojt',
        component: ThirdOjtContent
    },
    {
        path: '/booklist/:novels',
        name: 'booklist',
        props: true,
        component: BookList
    }
]
const router = new Router({
    mode: 'history',
    routes,
});

export default router;