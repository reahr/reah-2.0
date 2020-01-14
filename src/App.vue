<template>
    <v-app class="my-app" :style="{background: $vuetify.theme.themes['light'].background}" >
        <app-navigation></app-navigation>
        <router-view></router-view>
        <Footer></Footer>
    </v-app>
</template>

<script>
    import AppNavigation from '@/components/AppNavigation';
    import Footer from '@/components/Footer';

    export default {
        name: 'App',
        components: {
            AppNavigation,
            Footer
        }
    };


</script>

<style>

    [v-cloak] {
        display: none
    }

    @keyframes fade-in {
        0% {
            opacity: 0;
            -webkit-transform: translateX(-70px);
            transform: translateX(-70px);
        }

        100% {
            opacity: 1;
            -webkit-transform: translateX(0);
            transform: translateX(0);

        }
    }

    .transitionInto {
        animation: fade-in 0.5s;
    }
</style>

<style lang="scss">
</style>