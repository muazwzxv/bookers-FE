<template>
  <v-main>
    <v-container fluid>
      <v-layout column>
        <v-card shaped color="grey lighten-1">
          <v-card-text>
            <v-flex class="mb-4"> </v-flex>
            <v-text-field v-model="form.Name" label="FirstName"></v-text-field>

            <v-text-field
              v-model="form.Email"
              label="Email Address"
            ></v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" :loading="loading" @click="updateUser">
              <v-icon left dark></v-icon>
              Save Changes
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-layout>
      <UserListings />
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import { update } from "../../api/user-api";
import UserListings from "../listing/userListings";
export default {
  components: { UserListings },
  pageTitle: "My Profile",
  data() {
    return {
      loading: false,
      form: {
        Name: "",
        Email: "",
      },
    };
  },
  computed: {
    ...mapGetters(["name", "email"]),
  },
  created() {
    this.$store.dispatch("getInfo");
    this.fetchState();
  },
  methods: {
    fetchState() {
      this.form.Name = this.name;
      this.form.Email = this.email;
    },

    async updateUser() {
      const toUpdate = {
        name: this.form.Name,
        email: this.form.Email,
      };

      console.log(toUpdate);

      await update(this.id, toUpdate)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });

      location.reload();
    },
  },
};
</script>
