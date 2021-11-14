<template>
  <div class="hello">
    <div>
      <h3>Sci-Fi</h3>
      <button @click="recommendScifi(1)">Recommend 1 book</button>
      <button @click="recommendScifi(2)">Recommend 2 books</button>
      <button @click="recommendScifi(3)">Recommend 3 books</button>
    </div>
    <div>
      <h3>Mystery</h3>
      <button @click="recommendMystery(1)">Recommend 1 book</button>
      <button @click="recommendMystery(2)">Recommend 2 books</button>
      <button @click="recommendMystery(3)">Recommend 3 books</button>
    </div>
    <ul>
      <li v-for="(book, index) in books" :key="index">
        {{ book }}
      </li>
    </ul>
  </div>
</template>

<script>
const {
  BookCategory,
  RecommendationRequest,
  // RecommendationResponse,
} = require("../books_pb.js");
const { RecommendationsClient } = require("../books_grpc_web_pb.js");

export default {
  name: "BookRecommendations",
  props: {
    msg: String,
  },
  data() {
    return {
      books: [],
    };
  },
  created: function () {
    this.client = new RecommendationsClient("http://localhost:8080");
  },
  methods: {
    recommendScifi(maxResults) {
      const genre = BookCategory.SCIENCE_FICTION;
      this.updateRecommendations(genre, maxResults);
    },
    recommendMystery(maxResults) {
      const genre = BookCategory.MYSTERY;
      this.updateRecommendations(genre, maxResults);
    },
    updateRecommendations(genre, maxResults) {
      const request = new RecommendationRequest();
      request.setUserId(1);
      request.setCategory(genre);
      request.setMaxResults(maxResults);

      this.client.recommend(request, {}, (err, response) => {
        this.books = response.toObject().recommendationsList;
      });
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 8px;
  margin-right: 8px;
}
</style>
