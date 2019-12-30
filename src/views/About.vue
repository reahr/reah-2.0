<template>
        <v-container fluid class="about">
            <v-row class="flex-row" :align="alignment"
                   :justify="justify">
                <v-col :col="6" class="d-flex bg-img">
                    <div class="contentContainer d-flex">
                        <div class="heading-title">I’m a software developer based in NYC…
                        </div>
                    </div>
                </v-col>
                <v-col :col="6" class="d-flex">
                    It me
                </v-col>
            </v-row>
            <!--<div class="intro">About</div>-->
            <!--<div class="subtext">I am a software developer based in NYC.</div>-->
            <!--<div class="subtext-sm">I enjoy developing products that turn complex problems into intuitive solutions. Keeping up with contemporary technologies is essential to remain sharp in the development world and so I chose to build the first iteration of my personal site using Vue.</div>-->
            <!--<div class="subtext-sm pTop10">Backbone.js, jQuery, Bootstrap, Node.js, Java are the main tricks up my sleeve. I especially enjoy creating interactive reusable components for web applications.</div>-->
            <!--<div class="subtext-sm pTop10">When I'm not coding, you'll probably find me boxing, eating, or watching the next best superhero movie (✿◠‿◠).</div>-->
        </v-container>
</template>
<script>
    export default {
        data () {
            return {
                justify: "center",
                alignment: "stretch"
            }
        }
    }

</script>
<style>
    .about {
        padding: 4.0rem 16px 0 !important;
    }

    .intro {
        font-size: 1.5rem;
        line-height: 1.0;
    }

    .subtext{
        font-size: 1.0rem;
    }

    .subtext-sm{
        font-size: 0.75rem;
    }

    @media (min-width:  340px){
        .about {
            padding-top: 10.5rem !important;
        }

        .intro {
            font-size: 2.0rem;
            line-height: 1.0;
        }

        .subtext{
            font-size: 1.25rem;
        }

        .subtext-sm{
            font-size: 1.0rem;
        }
    }

    @media (min-width: 600px){
        .about {
            justify-content: flex-start;
            padding-top: 4.0rem !important;
            align-items: flex-start;
        }

        .subtext-sm {
            font-size: 1.25rem;
        }

        .pTop10{
            padding-top: 10px
        }
    }

    .flex-row {
        min-height: calc(100vh - 64px - 155px);
    }

    .contentContainer {
        min-height: 100%;
        align-items: flex-end;
        justify-content: center;
        flex-flow: column;
    }

    .heading-title {
        font-size: 36px;
        font-weight: 600px;
        text-align: right;
    }

    .bg-img {
        background-image: url("../assets/NYC.png");
        background-size: cover;
    }
</style>