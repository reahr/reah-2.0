<template>
        <v-footer :padless="padless">
                <v-row no-gutters class="flex purple-bg">
                    <v-col class='align-text d-flex pl-3 pr-3' cols="12" sm="4">
                        <strong>Reah Rajmangal</strong> — {{ new Date().getFullYear() }}
                    </v-col>
                    <v-col class='pr-3 pl-3 align-icons d-flex' cols="12" sm="8">
                        <a v-for="icon in icons"
                           :key="icon.id"
                           :href="icon.link"
                           target="_blank"
                        >
                            <v-btn
                                    class="mx-2"
                                    icon
                                    :content="icon.accessibleText"
                                    v-tippy='{followCursor : "initial", animation:"fade", delay:100, arrow : true, placement:"bottom"}'
                            >
                                <v-icon size="32px">{{ icon.i }}</v-icon>
                            </v-btn>
                        </a>
                    </v-col>
                </v-row>
        </v-footer>
</template>

<script>
    export default {
        name: "Footer",
        data: () => ({
            padless: true,
            flat: true,
            icons: [
                {id: 0, i: 'mdi-email', link: "mailto:reahrajmangal@gmail.com", accessibleText: "Email"},
                {id: 1, i: 'mdi-linkedin', link: "https://linkedin.com/in/reahr", accessibleText: "Linkedin"},
                {id: 2, i: 'mdi-github', link: "https://github.com/reahr", accessibleText: "Github"},
            ],
        }),
    }
</script>

<style lang="scss" scoped>
    .d-flex {
        align-items: center;
    }

    .v-footer .theme--light.v-btn.v-btn--icon {
        color: $purple !important;
    }

    .align-text, .align-icons {
        color: $purple !important;
        justify-content: center;
    }

    @media (min-width: 768px){
        .align-text {
            justify-content: flex-start;
        }
        .align-icons {
            justify-content: flex-end;
        }
    }

</style>