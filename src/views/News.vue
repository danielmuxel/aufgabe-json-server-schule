<template>
  <section class="section">
    <div class="container">
      <h1>News</h1>
      <router-link
        :to="{ name: 'NewsArticle', params: { id: newsArticle.id } }"
        v-for="newsArticle in news"
        :key="newsArticle.id"
      >
        <div class="box">
          <h2>{{ newsArticle.title }}</h2>
        </div>
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      url: "http://localhost:3000/news",
      news: null,
    };
  },
  methods: {
    getNews() {
      fetch(this.url)
        .then((response) => response.json())
        .then((data) => {
          this.news = data;
        });
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>

<style>
</style>