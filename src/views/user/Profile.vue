<template>
  <v-container fluid>
    <v-layout column>
      <v-card>
        <v-card-text>
          <v-flex class="mb-4"> </v-flex>
          <v-text-field v-model="form.Name" label="FirstName"></v-text-field>

          <v-text-field
            v-model="form.Email"
            label="Email Address"
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" :loading="loading" @click.native="update">
            <v-icon left dark>check</v-icon>
            Save Changes
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-layout>
    <avatar-picker
      v-model="showAvatarPicker"
      :current-avatar="form.avatar"
      @selected="selectAvatar"
    ></avatar-picker>
  </v-container>
</template>

<script>
// import AvatarPicker from "~/components/AvatarPicker";
export default {
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
  methods: {},
};
</script>