<template>
    <li class="experience-item">
        <div class="experience-top">
            <div>
                {{ item.startDate }} - {{ item.endDate }}
            </div>
        </div>
        <img class="time-point" :src="require('../assets/reverse-reah.svg')" v-show="$vuetify.breakpoint.smAndUp"/>
        <div class="experience-desc">
            <div>{{ item.title }} — {{ item.company}} </div>
            <div v-html="item.desc">
            </div>
            <!--Technologies used include vanilla JavaScript, jQuery, Backbone/Marionette, NodeJS, Bootstrap, HTML/CSS/SCSS-->
        </div>
    </li>
</template>

<script>
    export default {
        props: ['item'],
    };
</script>

<style scoped>
    .experience-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1rem;
    }

    .experience-item {
        position: relative;
        margin-bottom: 1rem;
        min-height: 5rem;
    }

    li {
        list-style-type: none;
    }

    @media (min-width: 600px) {
        .experience-item{
            display: flex;
        }

        .experience-top {
            margin-bottom: 0;
            display: block;
            width: 16.66667%;
        }

        .time-point {
            height: 8.33333%;
            width: 8.33333%;
        }

        .experience-desc{
            padding: 0 0 0 1.5rem !important;
            margin-top: 0;
            width: 75%;
        }

        /*.resume-container {*/
        /*display: initial;*/
        /*}*/
    }

    .time-point {
        position: relative;
        display: block;
        width: 16.66667%;
        height: 16.66667%;
        font-size: 32px;
    }

    .experience-desc {
        position: relative;
        padding: 0;
        text-align: left;
    }
</style>