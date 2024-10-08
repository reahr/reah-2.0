<template>
    <div>
        <Loader v-if="!loaded"></Loader>
        <v-sheet v-else>
            <div class="transitionInto">
                <v-container class="resume-container">
                    <div class="p-32 resume-title">Experience</div>
                    <ul class="experience-list">
                        <resume-item
                                v-for="item in expItems"
                                v-bind:key="item.id"
                                v-bind:item="item"
                        ></resume-item>
                    </ul>
                    <hr>
                    <div class="pb-32" data-aos="fade-zoom-in">
                        <div class="p-32 resume-title">Skills</div>
                        <info></info>
                        <!--<inline-svg class="responsive-img" :src="require('../assets/Skills Infographic (2).svg')"/>-->
                    </div>
                    <hr>
                    <div data-aos="fade-zoom-in">
                        <div class="p-32 resume-title">Education</div>
                        <ul class="experience-list edu-list">
                            <resume-item
                                    v-for="item in eduItems"
                                    v-bind:key="item.id"
                                    v-bind:item="item"
                            ></resume-item>
                        </ul>
                    </div>
                    <div class="pb-32 icon-holder">
                        <div class="pr-32 resume-title text-center"><a class="link" href="/resume.pdf" target="_blank" content="Resume as PDF"
                                                                 v-tippy='{followCursor : "initial", animation:"fade", delay:100, arrow : true, placement:"bottom"}'><img
                                height="32px" :src="require('../assets/picture_as_pdf-24px.svg')"></a></div>
                        <div class="resume-title text-center"><img
                                height="32px" :src="require('../assets/layers.svg')" content="Portfolio coming soon!"
                                v-tippy='{followCursor : "initial", animation:"fade", delay:100, arrow : true, placement:"bottom"}'></div>
                    </div>
                </v-container>
            </div>
        </v-sheet>
    </div>
</template>

<script>
    import ResumeItem from '@/components/ResumeItem';
    import Info from '@/components/svg/Info';
    import Loader from '@/components/Loader';

    export default {
        methods: {
            onLoaded(){
                console.log('img loaded');
                setTimeout(()=>{
                    this.loaded = true;
                },1200);            }
        },

        mounted: function () {
            this.$nextTick(function () {
                // Code that will run only after the
                // entire view has been rendered
                this.onLoaded();

            })
        },

        components: {
            ResumeItem,
            Info,
            Loader
        },
        data () {
            return {
                loaded: false,
                expItems: [
                    {
                        startDate: "Feb. '19",
                        endDate: "Today",
                        title: "Software Developer",
                        company: "RelPro",
                        link: "https://www.relpro.com/company",
                        desc: "<div>Developing various features of the company’s product, including their brand website, web application, <a class='link sb' target='_blank' href='https://chrome.google.com/webstore/detail/relpro-make-the-connectio/gpdejadabihcgjbfjhpcgmapeieofijo?hl=en-US'>chrome extension</a>, and QA testing all within an <span class='keyword'>agile</span> environment. Right now, I focus primarily on <span class='keyword'>front-end development</span>, but I dabble a bit in the back-end world using <span class='keyword'>MySQL</span> and <span class='keyword'>Node.js</span>.</div><div>The latest project I worked on introduced export customization on the platform enabling clients to narrow down on information they want to see.</div>"
                    },
                    {
                        startDate: "Jun. '18",
                        endDate: "Aug. '18",
                        title: "Summer Technology Analyst",
                        company: "JPMorgan Chase & Co.",
                        link: "https://www.jpmorgan.com/global/technology",
                        desc: "<div>Contributed to a large-scale project focused on the firm’s technology resistance and disaster recovery. I was tasked with creating a small dashboard using <span class='keyword'>AngularJS</span> and <span class='keyword'>D3.js</span> that visualized assets across different applications for the firm. </div>"
                    },
                    {
                        startDate: "Jun. '17",
                        endDate: "Aug. '17",
                        title: "Software Development Intern",
                        link: "https://www.relpro.com/company",
                        company: "RelPro",
                        desc: "<div>Used high-fidelity prototypes to create the company’s chrome extension — a product now used widely among clients in conjunction with other applications to further research and retrieve additional information about prospects.  I used <span class='keyword'>Google Chrome APIs</span> and a <span class='keyword'>web bundler</span> to minimize and clean the application’s codebase for the purpose of this plugin and, in turn, created a small <span class='keyword'>mobile</span> web app.</div>"
                    },
                    {
                        startDate: "Jun. '16",
                        endDate: "Aug. '16",
                        desc: "<div>Monitored functionality of the company’s application and catch regressions before each update using <span class='keyword'>Selenium IDE</span> along with visual browser testing. Wrote my first <span class='keyword'>Node.js</span> script that automates test execution in testing and production environments.</div>"
                    },
                    {
                        startDate: "Sept. '15",
                        endDate: "Jan. '19",
                        title: "Web Editor / Office Assistant",
                        company: "Glucksman Ireland House NYU",
                        link: "https://as.nyu.edu/content/nyu-as/as/research-centers/irelandhouse.html",
                        desc: "<div>In addition to administrative tasks, I was responsible for updating and creating content on their department website with heavy use of <span class='keyword'>HTML/CSS</span>. I was involved in migrating content to a modern and standardized CMS.  My professional web development journey began here —  with the simple task of creating marketing campaigns using <span class='keyword'>Mailchimp</span> and <span class='keyword'>HTML/CSS</span>.</div>"
                    }
                ],
                eduItems: [
                    {
                        startDate: "Always",
                        title: "Self Learner",
                        desc: "<div>Learning web development skills through online resources and my professional career. Right now, I am focusing on front-end frameworks like <span class='keyword'>Vue.js</span> and looking to incorporate high performing frameworks (like <span class='keyword'>Nuxt.js</span>) when I add more content to my personal website and beyond. I’m eager to additionally learn back end development and <span class='keyword'>software architecture</span> so that I have a more well-rounded knowledge of the <span class='keyword'>web stack</span>.</div>"
                    },
                    {
                        startDate: "Sept. '15",
                        endDate: "Dec. '18",
                        title: "Computer Science, BA",
                        company: "New York University, College of Arts & Sciences",
                        link: "https://cs.nyu.edu/",
                        desc: "<div>Began my professional development at NYU’s Courant Institute of Mathematical Studies where I took courses that required <span class='keyword'>python</span>, <span class='keyword'>java</span> and <span class='keyword'>C programming</span>. Relevant coursework included the basics like <span class='keyword'>Data Structures</span> and Basic Algorithms and cooler courses like <span class='keyword'>Introduction to Cybersecurity</span>, <span class='keyword'>Parallel Computing</span>, <span class='keyword'>Computer Networks</span>, and <span class='keyword'>Social Networks</span>. </div>"
                    }
                ]
            }
        },
    }
</script>
<style scoped lang="scss">
    .resume-container {
        padding-top: 56px;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    @media (min-width: 960px){
        .resume-container{
            padding-top: 64px;
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

        .edu-list:before {
            height: 58% !important;
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

    .pt-32 {
        padding-top: 32px;
    }

    .pr-32 {
        padding-right: 32px;
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

    @media  (max-width: 600px){
        .p-32 {
            padding-top: 16px;
            padding-bottom: 16px;
        }

        .pb-32 {
            padding-bottom: 16px
        }

        .pt-32 {
            padding-top: 16px;
        }

        .pr-32 {
            padding-right: 16px;
        }
    }

    .icon-holder {
        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>
