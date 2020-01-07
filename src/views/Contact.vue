/**
 * Created by Reah on 1/6/2020.
 */
<template>
    <div class="transitionInto">
        <v-container class="resume-container">
            <v-form
                    ref="form"
                    v-model="valid"
                    :lazy-validation="lazy"
            >
                <v-text-field
                        v-model="name"
                        :rules="nameRules"
                        label="Name"
                        required
                        class="p-24"
                ></v-text-field>
                <v-text-field
                        class="p-24"
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                ></v-text-field>
                <v-textarea
                        class="p-24"
                        v-model="msg"
                        :auto-grow="textAreaProps.autoGrow"
                        :clearable="textAreaProps.clearable"
                        :rules="msgRules"
                        :label="textAreaProps.label"
                        :row-height="textAreaProps.rowHeight"
                        :rows="4"
                ></v-textarea>
                <div class="text-center">
                    <v-btn
                            :disabled="!valid"
                            color="success"
                            class="mr-4"
                            @click="validate"
                    >
                        Validate
                    </v-btn>
                </div>
            </v-form>
        </v-container>
    </div>
</template>

<script>
    export default {
        data: () => ({
            valid: true,
            name: '',
            nameRules: [
                v => !!v || 'Name is required',
                v => (v && v.length > 2) || 'Name must be at least 2 characters',
            ],
            email: '',
            emailRules: [
                v => !!v || 'E-mail is required',
                v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            msg: '',
            msgRules: [
                v => !!v || 'Message is required',
                v => (v && v.length > 2) || 'Message must be at least 2 characters',
            ],
            lazy: false,
            textAreaProps: {
                autoGrow: false,
                clearable: true,
                label: "Message",
                rowHeight: "24px",
            }
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.snackbar = true
                }
            },
        },
    }
</script>
<style scoped lang="scss">
    .resume-container {
        padding-top: 4.5rem;
        padding-left: 15px !important;
        padding-right: 15px !important;
    }

    .contact-title {
        font-size: 32px;
        font-weight: 600;
    }

    .p-24{
        padding-top: 24px;
        padding-bottom: 24px;
    }
</style>
