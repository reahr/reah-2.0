<template>
    <li class="experience-item">
        <div class="experience-top sb">
            <div>
                {{ item.startDate }} <span v-if="item.endDate"> - {{ item.endDate }}</span>
            </div>
        </div>
        <img class="time-point" :src="require('../assets/Purple Record.svg')"/>
        <div class="experience-desc">
            <div class="sb" v-if="item.title">{{ item.title }}<span v-if="item.company"> — <a class="link" target="_blank" :href="item.link">{{ item.company}}</a></span></div>
            <div v-html="item.desc">
            </div>
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
        margin-bottom: 4px;
    }

    .experience-item {
        position: relative;
        margin-bottom: 32px;
        min-height: 5rem;
    }

    li {
        list-style-type: none;
    }


    .time-point {
        position: relative;
        display: none;
        width: 16.66667%;
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
            display: block;
            width: 16.666667%;
            height: 32px;
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


    .experience-desc {
        position: relative;
        padding: 0;
        text-align: left;
    }

    .sb {
        font-weight: 600;
    }

    .link {
        color: #5f4b8b;
        text-decoration: underline;
    }
</style>