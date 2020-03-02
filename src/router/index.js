import Vue from 'vue'
import Router from 'vue-router'
import option1 from '../components/router/option1.vue'
import option2 from '../components/router/option2.vue'
import option3 from '../components/router/option3.vue'
import option4 from '../components/router/option4.vue'


Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            // component: HelloWorld
            redirect: '/option1'
        },
        {
            path: '/option1',
            name: 'option1',
            component: option1
        },
        {
            path: '/option2',
            name: 'option2',
            component: option2
        },
        {
            path: '/option3',
            name: 'option3',
            component: option3
        },
        {
            path: '/option4',
            name: 'option4',
            component: option4
        },
    ]
})
