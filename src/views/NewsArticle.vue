<template>
  <h1>hello world</h1>
  <p>{{ id }}</p>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      url: 'http://localhost:3000/news/'
    }
  },
  methods: {
    getNewsArticle() {
      fetch(this.url + this.id)
      //...
    }
  }
}
</script>

<style>

</style>