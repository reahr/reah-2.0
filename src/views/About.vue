<template>
    <v-container class="pt-8 pb-8">
        <v-row no-gutters>
            <v-col class="d-flex first-col" cols='12' sm="4">
                <v-img max-height="175px" class="max-height" contain :src="require('../assets/reah-real.png')"></v-img>
            </v-col>
            <v-col class="d-flex" cols="12" sm="8">
                <div class="pb-32">My goal is to become an <span class="keyword">UX engineer</span> and use the skills I honed as a <span class="keyword">front-end developer</span> to turn  designs into beautiful and intuitive products.</div>
                <div class="pb-32"><span class="keyword">Marionette</span>, <span class="keyword">Backbone.js</span>, <span class="keyword">jQuery</span>, and <span class="keyword">Bootstrap</span> are the main tricks up my sleeve. I built this personal site as an entry way to <span class="keyword">Vue.js</span> development.</div>
                <div>When I’m not coding, you’ll find me boxing, eating, or watching the next big superhero movie <img :src="require('../assets/spidey.svg')" height="22px;"/>.
                </div>
            </v-col>
        </v-row>
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
<style lang="scss" scoped>
    .about {
        padding: 56px 16px 0 !important;
    }

    @media (min-width: 960px){
        .about {
            padding-top: 64px;
        }
    }

    .intro {
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.0;
    }

    .subtext{
        font-size: 1.5rem;
        font-weight: 500;
    }

    .subtext-sm{
        font-size: 0.75rem;
    }

    @media (min-width: 600px){
        .about {
            justify-content: flex-start;
            align-items: flex-start;
        }


    }

    .flex-row {
        min-height: calc(100vh - 207px);
    }

    .contentContainer {
        min-height: 100%;
        align-items: center;
        justify-content: center;
        flex-flow: column;
    }

    .heading-title {
        font-size: 28px;
        font-weight: 600;
        text-align: center;
    }

    @media (min-width: 860px){
        .heading-title{
            font-size: 36px;
        }
    }


    .bg-img {
        background-image: url("../assets/nyc2x.png");
        background-size: cover;
    }

    .pb-32 {
        padding-bottom: 32px;
    }

    .p-24 {
        padding-top: 24px !important;
        padding-bottom: 24px !important;
    }

    @media (min-width: 600px){
        .pl-25{
            padding-left: 25px !important;
        }
    }

    .pr-25{
        padding-right: 25px !important;
    }

    .desc {
        font-size: 22px;
    }

    .keyword {
        font-weight: 600;
        color: $purple;
    }

    @media (max-width: 600px){
        .ava {
            height: 130px;
        }

        .pb-32 {
            padding-bottom: 16px;
        }

        .about {
            height: 100vh;
            display: flex;
        }
    }

    @media (max-width: 320px) {
        .desc {
            font-size: 18px;
        }
    }


    .row {
        .d-flex{
            flex-direction: column;
            justify-content: center;
        }
    }

    .max-height {
        max-height: 120px;
    }

    .first-col {
        padding-bottom: 12px !important;
    }

    @media (min-width: 768px) {
        .max-height {
        }
        .first-col {
            padding-bottom: 0;
        }

    }
</style>