<template>
        <v-footer
                :padless="padless"
        >
            <v-card
                    flat
                    tile
                    width="100%"
                    class="text-center purple-bg"
            >
                <v-card-text>
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
                </v-card-text>

                <v-divider></v-divider>

                <v-card-text>
                    <strong>Reah Rajmangal</strong> — {{ new Date().getFullYear() }}
                </v-card-text>
            </v-card>
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

<style lang="scss">
</style>