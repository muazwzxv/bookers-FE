<template>
  <div>
    <v-btn color="primary" dark small v-bind="attrs" @click="dialog = true">
      <v-icon>mdi-plus</v-icon>
      Add Topics
    </v-btn>
    <v-dialog v-model="dialog" persistent max-width="600px">
      <v-card>
        <v-card-title>
          <span class="headline">New Topics</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Topics"
                  v-model="topic"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-select
                  :items="category"
                  v-model="selectedCategoryId"
                  item-value="id"
                  item-text="name"
                  label="Category"
                  required
                ></v-select>
              </v-col>

              <!-- <v-col cols="12" sm="6">
                <v-select
                  v-model="status"
                  :items="['available', 'sold']"
                  label="Status"
                  required
                ></v-select>
              </v-col> -->
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="postTopics"> Post </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import { PostTopic } from "../../api/Topic-api";
import { getCategory } from "../../api/Category-api";
import { eventBus } from "../../utils/even-bus";
export default {
  name: "AddTopics",

  data: () => ({
    dialog: false,
    topic: "",
    selectedCategoryId: "",
    category: [{}],
  }),

  created() {
    this.getCategory();
  },

  methods: {
    async postTopics() {
      const toPost = {
        name: this.topic,
        category_id: this.selectedCategoryId,
      };

      await PostTopic(toPost)
        .then((res) => {
          console.log(res, "response after posting topcis");
        })
        .catch((err) => {
          console.log(err, "err after posting topcis");
        });
      this.dialog = false;
      eventBus.$emit("reloadComments");
    },

    async getCategory() {
      await getCategory()
        .then((res) => {
          this.category = res.data.Categories;
          console.log(this.category, "category get endpoint");
        })
        .catch((err) => {
          console.log(err, "api error to get category");
        });
    },
  },
};
</script>
