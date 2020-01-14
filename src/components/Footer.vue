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
                    <v-btn
                            v-for="icon in icons"
                            :key="icon"
                            class="mx-2"
                            icon
                    >
                        <v-icon size="32px">{{ icon }}</v-icon>
                    </v-btn>
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
                'mdi-email',
                'mdi-linkedin',
                'mdi-github-circle',
            ],
        }),
    }
</script>

<style lang="scss">
</style>