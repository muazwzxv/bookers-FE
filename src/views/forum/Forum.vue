<template>
  <v-main>
    <v-container>
      <v-card max-width="1200">
        <v-list two-line>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="comment.id">
              <template>
                <v-list-item-content>
                  <!-- <v-list-item-title
                    v-text="comment.topic.name"
                  ></v-list-item-title> -->

                  <v-list-item-subtitle
                    v-if="comment.topic"
                    class="font-weight-bold text-left"
                    v-text="comment.topic.name"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle
                    v-if="comment.descriptions"
                    class="text-left"
                    v-text="comment.descriptions"
                  ></v-list-item-subtitle>

                  <v-list-item-subtitle
                    v-if="comment.user.name"
                    class="text-right"
                    v-text="comment.user.name"
                  ></v-list-item-subtitle>
                </v-list-item-content>
              </template>
            </v-list-item>

            <v-divider
              v-if="index < comment.length - 1"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-container>
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

  async created() {
    await this.getComments();
    console.log(this.comments, "Final comment object");
  },

  methods: {
    async getComments() {
      await GetComments()
        .then(async (res) => {
          this.comments = res.data.Comment;
        })
        .catch((err) => console.log(err), "the error bitch");

      await this.getTopicReference();
    },

    async getTopicReference() {
      for (let i = 0; i < this.comments.length; i++) {
        await GetTopicById(this.comments[i].topic_id)
          .then((res) => {
            this.comments[i].topic = res.data.Topic;
            this.comments.splice(i, 1, this.comments[i]);
          })
          .catch((err) => {
            console.log(err, "The error");
          });
      }
      this.getUserReference();
    },

    async getUserReference() {
      for (let i = 0; i < this.comments.length; i++) {
        await getUserById(this.comments[i].user_id)
          .then((res) => {
            this.comments[i].user = res.data.user;
            this.comments.splice(i, 1, this.comments[i]);
          })
          .catch((err) => {
            console.log(err, " the error from the user api endpoint");
          });
      }
    },
  },
};
</script>
