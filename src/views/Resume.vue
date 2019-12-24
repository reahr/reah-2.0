<template>
    <div>
        <v-container class="resume-container">
            <ul class="experience-list">
                <resume-item
                        v-for="item in items"
                        v-bind:key="item.id"
                        v-bind:item="item"
                ></resume-item>
            </ul>
            <hr>
            <div>
                <info></info>
                <!--<inline-svg class="responsive-img" :src="require('../assets/Skills Infographic (2).svg')"/>-->
            </div>
        </v-container>
    </div>
</template>

<script>
    import ResumeItem from '@/components/ResumeItem';
    import Info from '@/components/svg/info';


    export default {
        methods: {

        },
        components: {
            ResumeItem,
            Info
        },
        data: () => ({
            length: 3,
            window: 0,
            'list-items': [
                { title: 'Dashboard', icon: 'dashboard' },
                { title: 'Account', icon: 'account_box' },
                { title: 'Admin', icon: 'gavel' },
            ],
            items: [
                {
                    id: 0,
                    startDate: "Feb. 2019",
                    endDate: "Today",
                    title: "Software Developer",
                    company: "RelPro",
                    desc: "<div>Developing various features of the company's product, including the company's brand website, web "
                    + "application, Chrome extension, and QA testing all within an agile environment. Right "
                    + "now I focus primarily on front end development but I dabble a bit in the back end world using MySQL and Node.js. The latest "
                    + "project I worked on introduced export customization on the platform enabling clients to narrow down on the information they want to see.</div>"
                }
            ]
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

    @media (min-width: 960px){
        .resume-container{
            padding-top: 5.0rem;
        }
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
