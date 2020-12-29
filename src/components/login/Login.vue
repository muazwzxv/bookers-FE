<template id="nav">
  <v-container>
    <v-layout row>
      <v-flex xx12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <form @submit.prevent>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="email"
                    label="Email"
                    id="email"
                    v-model="email"
                    type="email"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="password"
                    label="Password"
                    id="password"
                    v-model="password"
                    type="password"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn type="submit" @click="onLogin">Sign up</v-btn>
                </v-flex>
              </v-layout>
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "login",

  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {},

  methods: {
    async onLogin() {
      const form = {
        email: this.email,
        password: this.password,
      };

      try {
        const acc = await this.$store.dispatch("login", form);
        console.log(acc, "made it bitch");

        this.$router.push("/home");
      } catch (err) {
        console.log(err, "nawww fuck off");
      }
    },
  },
};
</script>