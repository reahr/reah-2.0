/**
* Created by Reah on 1/6/2020.
*/
<template>
    <div class="transitionInto">
        <v-container class="contact-container">
            <div v-if="!msgSent">
                <div class="pb-24 contact-title">Message me on <a class="link">LinkedIn</a> or drop a note below!</div>
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
                            class="p-24 labelStyle"
                    ></v-text-field>
                    <v-text-field
                            class="p-24 labelStyle"
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                    ></v-text-field>
                    <v-textarea
                            class="p-24 labelStyle"
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
                                class="mr-4 content-btn rr-btn"
                                @click="validate"
                        >
                            Submit
                        </v-btn>
                    </div>
                </v-form>
            </div>
            <!--<div class="transitionInto" v-if="msgSent">-->
                <!--<div class="p-24 contact-title">Thanks for your message {{name}}. I'll get back to you if you have any questions :)</div>-->
            <!--</div>-->
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
            },
            msgSent: false,
        }),

        methods: {
            validate () {
                if (this.$refs.form.validate()) {
                    this.sendForm();
                }
            },
            sendForm(){
                this.postBody = {
                    name: this.name,
                    email: this.email,
                    message: this.msg
                };
                this.$http.post(`https://formspree.io/mgeojpnz`, {
                    body: this.postBody
                })
                    .then(response => {
                        this.name = this.getParsedName(this.name);
                        this.msgSent = true;
                    })
                    .catch(e => {
//                        this.msgSent = true;
                    })
            },
            getParsedName (name){
                var names = name.split(" ");
                return names[0];
            }
        },
    }
</script>
<style scoped lang="scss">
    .contact-container {
        padding-left: 60px !important;
        padding-right: 60px !important;
        height: 100vh;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }

    .contact-title {
        font-weight: 600;
        font-size: 24px;
    }

    @media (min-width: 600px){
        .contact-title {
            font-size: 32px;
        }
    }


    .p-24 {
        padding-top: 24px;
        padding-bottom: 24px;
    }

    .pb-24 {
        padding-bottom: 24px;
    }

    .labelStyle {
        font-weight: 600 !important;
    }

    .contact-container {
        padding-top: 56px;
    }

    @media (min-width: 960px){
        .contact-container {
            padding-top: 64px;
            padding-bottom: 0;
        }
    }

    @media (max-width: 600px){
        .p-24 {
            padding-top: 12px;
            padding-bottom: 12px;
        }

        .pb-24 {
            padding-bottom: 12px;
        }
    }

    //font-size: 24
    //padding-left: 15px
    //padding-top & bottom: 12px
</style>
