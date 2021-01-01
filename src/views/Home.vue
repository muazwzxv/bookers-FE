<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll color="blue">
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Listings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-fab-transition>
        <AddListings />
      </v-fab-transition>
    </v-app-bar>
    <Listings />
  </v-app>
</template>

<script>
import Listings from "./listing/Listings";
import AddListings from "./listing/AddListing";
export default {
  components: { Listings, AddListings },
  //
  name: "App",

  data() {
    return {
      reveal: false,
      dialog: false,
    };
  },

  created() {},

  methods: {},
};
</script>