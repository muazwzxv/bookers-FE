<template id="nav" >
  <v-container>
    <v-layout row align-center>
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
                  <v-btn type="submit" @click="onLogin">Login</v-btn>
                </v-flex>
              </v-layout>

              <v-alert v-if="status == true">Something went wrong</v-alert>
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
      isLoggedIn: false,
      error: true,
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

      await this.$store
        .dispatch("login", form)
        .then((res) => {
          console.log(res.user.role);
          if (res.user.role === "user") {
            this.$router.push("/listings");
          } else {
            this.$router.push("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>

<style scoped>
.center {
  margin-left: auto;
  margin-right: auto;
}
</style>