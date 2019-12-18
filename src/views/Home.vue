<template>
    <v-sheet>
        <v-container class="home transitionInto">
            <div class="intro text-center">Hi, I'm Reah!</div>
            <div class="subtext text-center">Software Developer | Ninja</div>
            <img :src="require('../assets/Circle.svg')"/>
            <v-btn icon class="scrollNext bounce" v-on:click="scrollToNext">
                <v-icon>mdi-chevron-down</v-icon>
            </v-btn>
        </v-container>
        <About ref="about"></About>
    </v-sheet>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue';

export default {
    methods: {
        handleScroll (event) {
            // Any code to be executed when the window is scrolled
        },
        scrollToNext: function(){
            var elem = this.$refs.about.$el;
            elem.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },
    created () {
//        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
//        window.removeEventListener('scroll', this.handleScroll);
    },
    data () {
        return {
            alignmentsAvailable: [
                'start',
                'center',
                'end',
                'baseline',
                'stretch',
            ],
            alignment: 'center',
            justifyAvailable: [
                'start',
                'center',
                'end',
                'space-around',
                'space-between',
            ],
            justify: 'center',
        }
    },
    name: 'home',
    components: {
        About
    }
};
</script>

<style scope>
    .home {
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
    }

    .scrollNext {
        position: absolute !important;
        bottom:12px;
    }

    .intro {
        font-size: 6.25rem;
        line-height: 6.25rem;
    }

    .subtext {
        font-size: 2.0rem;
        font-weight: 500;
    }

    .v-sheet {
        background-color: #f5f5f5 !important;
    }


    @-webkit-keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0); }
        40% {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px); }
        60% {
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px); } }

    .bounce:hover {
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%,
        20%,
        50%,
        80%,
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0); }
        40% {
            -webkit-transform: translateY(-30px);
            transform: translateY(-30px); }
        60% {
            -webkit-transform: translateY(-15px);
            transform: translateY(-15px); } }


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