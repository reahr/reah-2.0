<template>
    <div class="resume-container">
        <ul class="experience-list">
            <li class="experience-item">
                <div class="experience-top">
                    <div>
                        New York
                    </div>
                    <div>
                        June - Oct 2019
                    </div>
                </div>
                <img class="time-point" :src="require('../assets/reverse-reah.svg')" v-show="$vuetify.breakpoint.smAndUp"/>
                <div class="experience-desc">
                    <div>Software Developer</div>
                    <div>Did some important stuff...</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        data: () => ({
            length: 3,
            window: 0,
        }),
    }
</script>

<style scoped>
    .resume-container {
        padding-top: 4.5rem;
        padding-left: 15px !important;
        padding-right: 15px !important;
        height: 100vh;
    }

    @media (max-width: 600px) {
        .resume-container {
            padding-top: 4.5rem !important;
        }
    }

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
            padding: 0 0 0 2.5rem !important;
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

    .experience-list{
        padding-left: 0!important;
        position: relative;
    }

    .experience-list:before {
        bottom: 0;
        content: "";
        height: 100%;
        position: absolute;
        top: 5px;
        width: 2px;
        left: calc(23% - 1px);
        right: initial;
        background: rgba(0, 0, 0, 0.12);
    }
</style>
