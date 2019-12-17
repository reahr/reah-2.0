<template>
        <v-container class="home about">
            <div class="intro">About</div>
            <div class="subtext">I am a software developer based in NYC.</div>
            <div class="subtext-sm">I enjoy developing products that turn complex problems into intuitive solutions. Keeping up with contemporary technologies is essential to remain sharp in the development world and so I chose to build the first iteration of my personal site using Vue.</div>
            <div class="subtext-sm pTop10">Backbone.js, jQuery, Bootstrap, Node.js, Java are the main tricks up my sleeve. I especially enjoy creating interactive reusable components for web applications.</div>
            <div class="subtext-sm pTop10">When I'm not coding, you'll probably find me boxing, eating, or browsing the next best memes (✿◠‿◠).</div>
        </v-container>
</template>

<style>
    .home {
        padding: 3em !important;
    }

    .about {
        align-items: flex-start !important;
    }

    .subtext-sm {
        font-size: 1.25rem;
    }

    .pTop10{
        padding-top: 10px
    }

    @media (max-width:  600px){
        .about {
            padding-top: 4.5rem !important;
        }

        .intro {
            font-size: 2.0rem !important;
            line-height: 1.0 !important;
        }

        .subtext{
            font-size: 1.25rem !important;
        }

        .subtext-sm{
            font-size: 1.0rem !important;
        }
    }
</style>