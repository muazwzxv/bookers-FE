<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>Admin Panel</v-toolbar-title>

      <v-spacer></v-spacer>
    </v-app-bar>

    <!-- <v-main>

    </v-main> -->

    <UserList />
  </v-app>
</template>

<script>
import UserList from "./user/userList";
export default {
  //
  components: { UserList },
  name: "Admin",

  data() {
    return {
      drawer: false,
      reveal: false,
    };
  },

  created() {
    this.$store.dispatch("getInfo");
  },
};
</script>
