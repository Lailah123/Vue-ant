import Vue from 'vue'
import Router from 'vue-router'
import option1 from '../components/router/option1.vue'
import option2 from '../components/router/option2.vue'


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
      name: 'option',
      component: option2
    }
  ]
})
