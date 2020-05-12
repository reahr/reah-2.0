<template>
    <Loader v-if="!loaded"></Loader>
    <div v-else class="home">
        <div class="banner">
            <div class="pb-2">
                Reah Rajmangal
            </div>
            <div class="pt-2 border-top">
                Software Developer
            </div>
        </div>
        <about></about>
    </div>
</template>

<script>
// @ is an alias to /src
import About from '@/views/About.vue';
import Loader from '@/components/Loader';

export default {
    methods: {
        onLoaded(){
            setTimeout(()=>{
                this.loaded = true;
            },1200);
        },
    },
    created () {
//        window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
//        window.removeEventListener('scroll', this.handleScroll);
    },

    mounted: function () {
        this.$nextTick(function () {
            // Code that will run only after the
            // entire view has been rendered
            this.onLoaded();

        })
    },

    data () {
        return {
            loaded: false,
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
        About,
        Loader
    }
};
</script>

<style scoped>

    .home {
        padding-top: 56px;
    }

    @media (min-width: 960px){
        .home {
            padding-top: 64px;
        }
    }

    .banner {
        height: 30vh;
        color: #fff;
        text-align: center;
        font-size: 36px;
        font-weight: 700;
        display: flex;
        flex-direction: column;
        align-items:center;
        justify-content:center;
        background-image: linear-gradient(to bottom, rgba(95, 75, 139, 0.78), #b2abbc);
    }

    .border-top {
        border-top: 4px solid #fff;
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

    .bounce {
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