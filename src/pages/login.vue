<template>
  <v-app id="inspire">
    <v-content>
      <v-container class="fill-height"
                   fluid>
        <v-row align="center"
               justify="center">
          <v-col cols="12"
                 sm="8"
                 md="4">
            <v-card class="elevation-12">
              <v-toolbar color="primary"
                         dark
                         flat>
                <v-toolbar-title>Login</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field label="Email"
                                name="login"
                                prepend-icon="email"
                                type="text" />

                  <v-text-field id="password"
                                label="Password"
                                name="password"
                                prepend-icon="lock"
                                type="password" />
                </v-form>
              </v-card-text>
              <v-card-actions>
                <a class="ml-3"  @click="maildia = !maildia">没有账号? 注册</a>
                <v-spacer />
                <v-btn color="primary"
                       @click.stop="login_confirm">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-dialog v-model="maildia"
              width="500px">
      <v-card class="mx-auto"
              style="max-width: 500px;">
        <v-toolbar color="deep-purple accent-4"
                   cards
                   dark
                   flat>
          <v-btn icon>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-card-title class="title font-weight-regular">Sign up</v-card-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-form ref="form"
                v-model="form"
                class="pa-4 pt-6">
          <v-text-field v-model="password"
                        :rules="[rules.password, rules.length(6)]"
                        filled
                        color="deep-purple"
                        counter="6"
                        label="Password"
                        style="min-height: 96px"
                        type="password"></v-text-field>
          <v-text-field v-model="phone"
                        filled
                        color="deep-purple"
                        label="Phone number"></v-text-field>
          <v-text-field v-model="email"
                        :rules="[rules.email]"
                        filled
                        color="deep-purple"
                        label="Email address"
                        type="email"></v-text-field>
          <v-checkbox v-model="agreement"
                      :rules="[rules.required]"
                      color="deep-purple">
            <template v-slot:label>
              I agree to the&nbsp;
              <a href="#"
                 @click.stop.prevent="dialog = true">Terms of Service</a>
              &nbsp;and&nbsp;
              <a href="#"
                 @click.stop.prevent="dialog = true">Privacy Policy</a>*
            </template>
          </v-checkbox>
        </v-form>
        <v-divider></v-divider>
        <v-card-actions>
          <v-btn text
                 @click="$refs.form.reset()">
            Clear
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn :disabled="!form"
                 :loading="isLoading"
                 class="white--text"
                 color="deep-purple accent-4"
                 depressed>Submit</v-btn>
        </v-card-actions>
        <v-dialog v-model="dialog"
                  absolute
                  max-width="400"
                  persistent>
          <v-card>
            <v-card-title class="headline grey lighten-3">Legal</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn text
                     @click="agreement = false, dialog = false">
                No
              </v-btn>
              <v-spacer></v-spacer>
              <v-btn class="white--text"
                     color="deep-purple accent-4"
                     @click="agreement = true, dialog = false">
                Yes
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  name: 'login',
  props: {
    source: String,
  },
  methods: {
    login_confirm: function () {
      this.$router.push('/dashboard')
    }
  },
  data: () => ({
    agreement: false,
    maildia:false,
    dialog: false,
    email: undefined,
    form: false,
    isLoading: false,
    password: undefined,
    phone: undefined,
    rules: {
      email: v => (v || '').match(/@/) || 'Please enter a valid email',
      length: len => v => (v || '').length >= len || `Invalid character length, required ${len}`,
      password: v => (v || '').match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*(_|[^\w])).+$/) ||
        'Password must contain an upper case letter, a numeric character, and a special character',
      required: v => !!v || 'This field is required',
    },
  }),
}
</script>