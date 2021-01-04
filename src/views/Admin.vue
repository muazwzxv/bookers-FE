<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Application</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
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
  created() {
    this.$store.dispatch("getInfo");
  },
};
</script>