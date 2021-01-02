<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll color="blue">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ $route.name }}</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-fab-transition>
        <AddListings v-if="$route.name === 'listings'" />
      </v-fab-transition>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/listings">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Listings</v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="/profile">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <!-- The router view is here -->
    <router-view />
  </v-app>
</template>

<script>
import AddListings from "./listing/AddListing";
export default {
  components: { AddListings },
  //
  name: "App",

  data() {
    return {
      reveal: false,
      drawer: false,
      dialog: false,
    };
  },

  created() {},

  methods: {},
};
</script>