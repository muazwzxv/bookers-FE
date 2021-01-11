<template>
  <v-main>
    <v-card class="mx-auto" max-width="800">
      <v-list two-line>
        <v-list-item-group active-class="pink--text" multiple>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="comment.id">
              <template v-slot:default="{ active }">
                <v-list-item-content>
                  <!-- <v-list-item-title
                    v-text="comment.topic.name"
                  ></v-list-item-title> -->

                  <v-list-item-subtitle
                    class="text--primary"
                    v-text="comment.descriptions"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle
                    v-text="comment.descriptions"
                  ></v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action>
                  <v-list-item-action-text
                    v-text="comment.id"
                  ></v-list-item-action-text>

                  <v-icon v-if="!active" color="grey lighten-1">
                    mdi-star-outline
                  </v-icon>

                  <v-icon v-else color="yellow darken-3">
                    mdi-star
                  </v-icon>
                </v-list-item-action>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < comment.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list-item-group>
      </v-list>
    </v-card>
  </v-main>
</template>
<script>
import { GetComments } from "../../api/Comment-api";
import { GetTopicById } from "../../api/Topic-api";
import { getUserById } from "../../api/user-api";
export default {
  data: () => ({
    comments: [{}],
    divider: {
      divider: true,
      inset: true,
    },
  }),

  created() {
    this.getComments();
  },

  methods: {
    async getComments() {
      await GetComments()
        .then((res) => {
          this.comments = res.data.Comment;
          this.getTopicReference();
          this.getUserReference();
        })
        .catch((err) => console.log(err), "the error bitch");
    },

    async getTopicReference() {
      for (let i = 0; i < this.comments.length; i++) {
        await GetTopicById(this.comments[i].topic_id)
          .then((res) => {
            this.comments[i].topic = res.data.Topic;
          })
          .catch((err) => {
            console.log(err, "The error");
          });
      }
      console.log(
        this.comments,
        "Comment object after adding the topic reference"
      );
    },

    async getUserReference() {
      for (let i = 0; i < this.comments.length; i++) {
        await getUserById(this.comments[i].user_id)
          .then((res) => {
            console.log(res, "the response for user ");
            this.comments[i].user = res.data.user;
          })
          .catch((err) => {
            console.log(err, " the error from the user api endpoint");
          });
      }
      console.log(
        this.comments,
        "Comment object after adding the user reference"
      );
    },
  },
};
</script>
