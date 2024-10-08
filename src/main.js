import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import AOS from 'aos'
import 'aos/dist/aos.css'
import VueTippy, { TippyComponent } from "vue-tippy";
import axios from 'axios'

Vue.prototype.$http = axios;

Vue.use(VueTippy);

Vue.config.productionTip = false;

Vue.use(vuetify);


router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
});

const app = new Vue({
    created(){AOS.init()},
    data: { loading: false },
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');


Vue.component('tippy', TippyComponent);