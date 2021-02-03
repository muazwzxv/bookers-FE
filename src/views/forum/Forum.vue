<template>
  <v-main>
    <v-container>
      <v-card max-width="1200">
        <v-list two-line>
          <template v-for="(comment, index) in comments">
            <v-list-item :key="comment.id">
              <template>
                <v-list-item-content>
                  <v-list-item-title
                    v-if="comment.topicName"
                    v-text="comment.topicName"
                    class="text-left"
                  ></v-list-item-title>

                  <v-list-item-subtitle
                    v-if="comment.descriptions"
                    class="text-left"
                    >{{ comment.descriptions }}</v-list-item-subtitle
                  >

                  <v-list-item-subtitle
                    v-if="comment.publisherName"
                    class="text-right"
                    >{{ comment.publisherName }}</v-list-item-subtitle
                  >
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
import { GetCommentAndRelations } from "../../api/Comment-api";

import { eventBus } from "../../utils/even-bus";
export default {
  data: () => ({
    comments: [{}],
    divider: {
      divider: true,
      inset: true,
    },
  }),

  async created() {
    eventBus.$on("reloadComments", this.getComments);
    this.getCommentsAndRelations();
  },

  methods: {
    async getCommentsAndRelations() {
      await GetCommentAndRelations()
        .then((res) => {
          console.log(res.data, "the api for the join endpoint");
          this.comments = res.data.Comment;
        })
        .catch((err) => {
          console.log(err, "the error for the join endpoint");
        });
    },
  },
};
</script>
