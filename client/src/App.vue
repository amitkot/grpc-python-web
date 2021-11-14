<template>
  <BookRecommendations msg="Welcome to book recommendations" />
</template>

<script>
import BookRecommendations from "./components/BookRecommendations.vue";

export default {
  name: "App",
  components: {
    BookRecommendations,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
