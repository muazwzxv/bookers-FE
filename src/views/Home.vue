<template>
  <v-app id="inspire">
    <v-app-bar app shrink-on-scroll color="yellow">
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="pink"
          fab
          dark
          small
          absolute
          bottom
          left
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Listings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>
    <Listings />
  </v-app>
</template>

<script>
import { getAll } from "../api/Listings-api";
import Listings from "./listing/Listings.vue";
export default {
  components: { Listings },
  //
  name: "listings",

  data() {
    return {
      listings: [{}],
      reveal: false,
    };
  },

  created() {
    this.getListitngs();
  },

  methods: {
    async getListitngs() {
      const listings = await getAll();
      this.listings = listings.data.listing;
      console.log(listings);
    },
  },
};
</script>