<template>
        <v-container fluid class="about">
            <v-row class="flex-row" :align="alignment"
                   :justify="justify"
                   data-aos="fade-zoom-in"
            >
                <v-col     v-if="$vuetify.breakpoint.smAndUp"
                           :col="6" class="bg-img pr-25">
                    <div class="contentContainer d-flex">
                        <div class="heading-title">I’m a <span class="keyword">software developer</span><br>based in <span class="keyword">NYC</span>…
                        </div>
                    </div>
                </v-col>
                <v-col :col="6" class="pl-25">
                    <div class="contentContainer d-flex desc">
                        <div v-if="$vuetify.breakpoint.xs" class="pb-32">I’m a <span class="keyword">software developer</span> based in <span class="keyword">NYC</span>…
                        </div>
                        <div class="pb-32">My goal is to become an <span class="keyword">UX engineer</span> and use the skills I honed as a <span class="keyword">front-end developer</span> to turn  designs into beautiful and intuitive products.</div>
                        <div class="pb-32"><span class="keyword">BackboneJS</span>, <span class="keyword">jQuery</span>, and <span class="keyword">Bootstrap</span> are the main tricks up my sleeve. I built this personal site as an entry way to <span class="keyword">VueJS</span> development.</div>
                        <div>When I’m not coding, you’ll find me boxing, eating, or watching the next big superhero movie.<img :src="require('../assets/spidey.svg')" height="22px;"/>
                        </div>
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
<style lang="scss">
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

    @media (min-width: 600px){
        .about {
            justify-content: flex-start;
            padding-top: 4.0rem !important;
            align-items: flex-start;
        }
    }

    .flex-row {
        min-height: calc(100vh - 207px);
    }

    .contentContainer {
        min-height: 100%;
        align-items: flex-end;
        justify-content: center;
        flex-flow: column;
    }

    .heading-title {
        font-size: 28px;
        font-weight: 600;
        text-align: right;
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
</style>