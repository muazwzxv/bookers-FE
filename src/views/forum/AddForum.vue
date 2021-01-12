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
          Add comments
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">New Comments</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Comments"
                  v-model="comment"
                  required
                ></v-text-field>
              </v-col>

              <v-col cols="12">
                <v-select
                  :items="topic"
                  v-model="selectedTopicId"
                  item-value="id"
                  item-text="name"
                  label="Topic"
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
          <v-btn color="blue darken-1" text @click="postComments"> Post </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { PostComment } from "../../api/Comment-api";
import { GetTopic } from "../../api/Topic-api";
import { mapGetters } from "vuex";
import { eventBus } from "../../utils/even-bus";
export default {
  name: "AddComments",

  data: () => ({
    dialog: false,
    comment: "",
    selectedTopicId: "",
    topic: [{}],
  }),

  created() {
    this.getTopics();
  },

  computed: {
    ...mapGetters(["user_id"]),
  },

  watch: {
    selected: function(newvalue) {
      console.log(newvalue, "the new value");
    },
  },

  methods: {
    async postComments() {
      const toSend = {
        descriptions: this.comment,
        user_id: this.user_id,
        topic_id: this.selectedTopicId,
      };

      await PostComment(toSend)
        .then((res) => {
          console.log(res, "Response from comment");
        })
        .catch((err) => {
          console.log(err, "The error is here");
        });
      this.dialog = false;
      this.comment = "";
      eventBus.$emit("reloadComments");
    },

    async getTopics() {
      await GetTopic()
        .then((res) => {
          this.topic = res.data.Topic;
          console.log(this.topic, "afther shits done");
        })
        .catch((err) => {
          console.log(err, "Err Api call to get Topics ");
        });
    },
  },
};
</script>
