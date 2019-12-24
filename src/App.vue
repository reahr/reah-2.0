<template>
    <v-app class="my-app">
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
    ::-webkit-scrollbar {
        display: none;
    }
</style>

<style lang="scss">

</style>