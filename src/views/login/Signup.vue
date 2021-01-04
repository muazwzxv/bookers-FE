<template>
  <v-container>
    <v-layout row>
      <v-flex xx12 sm6 offset-sm3>
        <v-card>
          <v-card-text>
            <form @submit.prevent>
              <v-layout row>
                <v-flex xs12>
                  <v-text-field
                    name="Name"
                    label="Name"
                    id="Name"
                    v-model="name"
                    type="text"
                    required
                  ></v-text-field>
                </v-flex>
              </v-layout>

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
                  <v-text-field
                    name="confirmedpassword"
                    label="Confirm Password"
                    id="confirmedpassword"
                    v-model="confirmedpassword"
                    type="password"
                    :rules="[comparePassword]"
                  ></v-text-field>
                </v-flex>
              </v-layout>

              <v-layout row>
                <v-flex xs12>
                  <v-btn
                    type="submit"
                    @click="onSignup"
                    :disabled="isSignupDisabled"
                    >Sign up</v-btn
                  >
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
  name: "signup",

  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmedpassword: "",
      role: "",
    };
  },

  computed: {
    comparePassword() {
      return this.password !== this.confirmedpassword
        ? "Passwords do not match"
        : "";
    },

    isSignupDisabled() {
      return this.password !== this.confirmedpassword;
    },
  },

  methods: {
    async onSignup() {
      const form = {
        name: this.name,
        email: this.email,
        password: this.password,
        role: "user",
      };

      try {
        const acc = await this.$store.dispatch("register", form);
        console.log(acc, "made it bitch");

        this.$router.push("/listings");
      } catch (err) {
        console.log(err, "nawww fuck off");
      }
    },
  },
};
</script>