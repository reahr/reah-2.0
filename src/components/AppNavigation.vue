<template>
    <div>
        <v-app-bar class="navbar" absolute :flat="flat">
            <img class="mr-3" :src="require('../assets/reverse-reah.svg')" height="40"/>

            <v-spacer></v-spacer>



            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-toolbar-items>
                    <v-btn text>Resume</v-btn>
                    <v-btn text>Portfolio</v-btn>
                    <v-btn text>Contact</v-btn>
                </v-toolbar-items>
            </template>
            <template v-if="$vuetify.breakpoint.xs">
                <v-btn icon>
                    <v-icon>mdi-briefcase-outline</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-code-braces</v-icon>
                </v-btn>
                <v-btn icon>
                    <v-icon>mdi-message-outline</v-icon>
                </v-btn>
            </template>
        </v-app-bar>
    </div>
</template>

<script>
    export default {
        data: () => ({
            flat: true,
        }),
    }
</script>

<style scoped>
    .navbar {
        position: fixed !important;
    }
</style>