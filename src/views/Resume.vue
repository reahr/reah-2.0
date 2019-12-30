<template>
    <div>
        <v-container class="resume-container">
            <div class="p-32 resume-title">Experience</div>
            <ul class="experience-list">
                <resume-item
                        v-for="item in items"
                        v-bind:key="item.id"
                        v-bind:item="item"
                ></resume-item>
            </ul>
            <hr>
            <div class="pb-32"  data-aos="fade-zoom-in"
            >
                <div class="p-32 resume-title">Skills</div>
                <info></info>
                <!--<inline-svg class="responsive-img" :src="require('../assets/Skills Infographic (2).svg')"/>-->
            </div>
            <hr>
            <div class="p-32 resume-title">Education</div>
        </v-container>
    </div>
</template>

<script>
    import ResumeItem from '@/components/ResumeItem';
    import Info from '@/components/svg/Info';


    export default {
        methods: {

        },
        components: {
            ResumeItem,
            Info
        },
        data: () => ({
            items: [
                {
                    startDate: "Feb. 2019",
                    endDate: "Today",
                    title: "Software Developer",
                    company: "RelPro",
                    link: "https://www.relpro.com/company",
                    desc: "<div>Developing various features of the company’s product, including their brand website, web application, chrome extension, and QA testing all within an agile environment. Right now, I focus primarily on front-end development, but I dabble a bit in the back end world using MySQL and Node.js.</div><div>The latest project I worked on introduced export customization on the platform enabling clients to narrow down on information they want to see.</div>"
                },
                {
                    startDate: "Jun. 2018",
                    endDate: "Aug. 2018",
                    title: "Summer Technology Analyst",
                    company: "JPMorgan Chase & Co.",
                    link: "https://www.jpmorgan.com/global/technology",
                    desc: "<div>Contributed to a large-scale project focused on the firm’s technology resistance and disaster recovery. I was tasked with creating a small dashboard using AngularJS and D3.js that visualized assets across different applications for the firm. </div>"
                },
                {
                    startDate: "Jun. 2017",
                    endDate: "Aug. 2017",
                    title: "Software Development Intern",
                    link: "https://www.relpro.com/company",
                    company: "RelPro",
                    desc: "<div>Used high-fidelity prototypes to create the company’s chrome extension — a product now used widely among clients in conjunction with other applications to further research and retrieve additional information about prospects.  I used Google Chrome APIs and a web bundler to minimize and clean the application’s codebase for the purpose of this plugin and, in turn, created a small mobile web app.</div>"
                },
                {
                    startDate: "Jun. 2016",
                    endDate: "Aug. 2016",
                    desc: "<div>Monitored functionality of the company’s application and catch regressions before each update using Selenium IDE along with visual browser testing. Wrote my first Node.js script that automates test execution in testing and production environments.</div>"
                },
                {
                    startDate: "Sept. 2015",
                    endDate: "Jan. 2019",
                    title: "Web Editor / Office Assistant",
                    company: "Glucksman Ireland House NYU",
                    link: "https://as.nyu.edu/content/nyu-as/as/research-centers/irelandhouse.html",
                    desc: "<div>In addition to administrative tasks, I was responsible for updating and creating content on their department website with heavy use of HTML/CSS. I was involved in migrating content to a modern and standardized CMS.  My professional web development journey began here —  with the simple task of creating marketing campaigns using Mailchimp and HTML/CSS.</div>"
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
        display: none;
    }

    @media (min-width: 600px){
        .experience-list:before {
            display: initial;
            bottom: 0;
            content: "";
            height: 80%;
            position: absolute;
            top: 5px;
            width: 2px;
            left: calc(23% - 1px);
            right: initial;
            background: rgba(0, 0, 0, 0.12);
        }
    }

    @media (min-width: 720px){
        .experience-list:before{
            height: 84%;
        }
    }

    .p-32 {
        padding-top: 32px;
        padding-bottom: 32px;
    }

    .pb-32 {
       padding-bottom: 32px
    }

    .resume-title {
        font-size: 32px;
        font-weight: 600;
    }

    hr {
        color: #5f4b8b !important;
        background-color: #5f4b8b;
        height: 1px;
        border: none;
    }
</style>
