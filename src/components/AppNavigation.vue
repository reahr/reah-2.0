<template>
    <div>
        <v-app-bar class="navbar" absolute :flat="flat">
            <router-link to="/" exact class="a-link">
                <img class="mr-3" :src="require('../assets/reverse-reah.svg')" height="30"/>
            </router-link>

            <v-spacer></v-spacer>

            <template v-if="$vuetify.breakpoint.smAndUp">
                <v-toolbar-items class="tool-links">
                    <v-btn to="/resume" exact text>Resume</v-btn>
                    <!--<v-btn text>Portfolio</v-btn>-->
                    <v-btn text to="/contact">Contact</v-btn>
                </v-toolbar-items>
            </template>
            <template v-if="$vuetify.breakpoint.xs" class="tool-links">
                <v-btn icon to="/resume" exact>
                    <v-icon>mdi-briefcase-outline</v-icon>
                </v-btn>
                <!--<v-btn icon>-->
                    <!--<v-icon>mdi-code-braces</v-icon>-->
                <!--</v-btn>-->
                <v-btn icon to="/contact" exact>
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

<style scoped lang="scss">
    .navbar {
        box-shadow: 0 0px 4px 0 rgba(0, 0, 0, 0.5);
        position: fixed !important;
        .tool-links{
            color: #000 !important;
            .v-btn {
                color: $purple;
                font-weight: bold;
                font-size: 16px;
            }
        }
    }

    .a-link {
        display: inline-flex;
    }
</style>