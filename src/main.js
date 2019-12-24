import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import vuetify from './plugins/vuetify';
import '@babel/polyfill';
import AOS from 'aos'
import 'aos/dist/aos.css'
import {InlineSvgPlugin} from 'vue-inline-svg';
import VueTippy, { TippyComponent } from "vue-tippy";

Vue.use(VueTippy);
Vue.use(InlineSvgPlugin);

Vue.config.productionTip = false;

Vue.use(vuetify);

new Vue({
    created(){AOS.init()},
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app');

Vue.component("tippy", TippyComponent);