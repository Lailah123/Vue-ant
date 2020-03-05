import Vue from 'vue'
import Antd from 'ant-design-vue';
import router from './router'
import App from './App';
import 'ant-design-vue/dist/antd.css';
import Sider from './components/Sider.vue';
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
Vue.config.productionTip = false;

Vue.use(Antd);
// 注册组件
Vue.component('Sider', Sider);
Vue.component('Footer', Footer);
Vue.component('Content', Content);
Vue.config.productionTip = false

new Vue({
    data:{
        a:123,
    },
    router,
    // vue 1.0写法
    //   components: { App },
    // vue2.0写法
    render: h => h(App),
    created: function () {
        // `this` 指向 vm 实例
        console.log(this)
      }
}).$mount('#app')