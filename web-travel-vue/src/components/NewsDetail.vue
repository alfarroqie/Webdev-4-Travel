<template>
    <body>
    <div class="">
      <h1>{{currentNews.title}}</h1>
      <h6>Publish: {{currentNews.publish}}</h6>
      <p> {{currentNews.content}}</p>
    </div>
    </body>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-detail",
  data() {
    return {
      currentNews: null,
    };
  },
  methods: {
    getNewsDetail(id) {
      NewsDataService.get(id)
        .then((response) => {
          this.currentNews = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.getNewsDetail(this.$route.params.id);
  },
};
</script>

<style>
h1 {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>