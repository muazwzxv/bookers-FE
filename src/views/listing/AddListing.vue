<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          small
          absolute
          bottom
          right
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-plus</v-icon>
          Add Listings
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Listings</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Title"
                  v-model="title"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Contact number"
                  v-model="contact"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="Price"
                  hint="Price of the item"
                  v-model="price"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  v-model="description"
                  label="Description"
                  required
                ></v-textarea>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="delivery"
                  :items="['cod', 'delivery']"
                  label="Delivery type"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  v-model="status"
                  :items="['available', 'sold']"
                  label="Status"
                  required
                ></v-select>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="postListing"> Post </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { postListings } from "../../api/Listings-api";
export default {
  name: "AddListing",

  data: () => ({
    dialog: false,
    title: "",
    contact: "",
    price: 0.0,
    status: "",
    description: "",
    delivery: "",
  }),

  methods: {
    async postListing() {
      const listing = {
        title: this.title,
        contact: this.contact,
        status: this.status,
        price: this.price,
        delivery_type: this.delivery,
        description: this.description,
        user_id: this.$store.getters.user_id,
      };

      console.log(listing);

      await postListings(listing)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err, "the fucking error");
        });

      this.dialog = false;
      // this.$emit()
    },
  },
};
</script>