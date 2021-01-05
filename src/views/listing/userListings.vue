<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col v-for="listing in this.listings" :key="listing" cols="4">
          <v-card height="200" width="600" shaped>
            <v-card-title>{{ listing.title }}</v-card-title>

            <v-card-text>
              <v-row class="mx-0">
                <div class="grey--text ml-3">
                  Contact : {{ listing.contact }}
                </div>
              </v-row>

              <v-row class="mx-0">
                <div class="grey--text ml-3">RM {{ listing.price }}</div>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="teal accent-4" @click="reveal = true"
                >Description</v-btn
              >
            </v-card-actions>

            <v-expand-transtion>
              <v-card
                v-if="reveal"
                class="transition-fast-in-fast-out v-card--reveal"
                style="height: 100%"
              >
                <v-card-title>Description</v-card-title>
                <v-card-text class="pb-0">
                  <p>{{ listing.description }}</p>
                </v-card-text>
                <v-card-actions class="pt-0">
                  <v-btn text color="teal accent-4" @click="reveal = false"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-expand-transtion>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import { mapGetters } from "vuex";
import { getAllUsersListing } from "../../api/Listings-api";
export default {
  //
  name: "UserListings",

  data() {
    return {
      listings: [{}],
      reveal: false,
    };
  },

  created() {
    this.getListitngs();
  },

  computed: {
    ...mapGetters(["user_id"]),
  },

  methods: {
    async getListitngs() {
      await getAllUsersListing(this.user_id)
        .then((res) => {
          this.listings.push(...res.data.listings);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
.v-card--reveal {
  bottom: 0;
  opacity: 1 !important;
  position: absolute;
  width: 100%;
}
</style>