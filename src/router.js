import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Resume from './views/Resume.vue';
import Contact from './views/Contact.vue';


Vue.use(Router);

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                title: 'Reah Rajmangal | Home',
            }
        },
        {
            path: '/resume',
            name: 'resume',
            component: Resume,
            meta: {
                title: 'Reah Rajmangal | Resume',
            }
        },
        {
            path: '/contact',
            name: 'contact',
            component: Contact,
            meta: {
                title: 'Reah Rajmangal | Contact',
            }
        },

    ],

    //to allow scroll to initial position every route jump
    scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
    },
});