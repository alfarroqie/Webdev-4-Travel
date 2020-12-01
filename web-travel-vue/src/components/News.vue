<template>
  <div v-if="currentNews" class="edit-form">
    <h4>News</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
        <input
          type="text"
          class="form-control"
          id="title"
          v-model="currentNews.title"
        />
      </div>
      <div class="form-group">
        <label for="content">Content</label>
        <input
          type="text"
          class="form-control"
          id="content"
          v-model="currentNews.content"
        />
      </div>
    </form>

    <button class="badge badge-danger mr-2" @click="deleteNews">Delete</button>

    <button type="submit" class="badge badge-success" @click="updateNews">
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news",
  data() {
    return {
      currentNews: null,
      message: "",
    };
  },
  methods: {
    getNews(id) {
      NewsDataService.get(id)
        .then((response) => {
          this.currentNews = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    updateNews() {
      NewsDataService.update(this.currentNews.id, this.currentNews)
        .then((response) => {
          console.log(response.data);
          this.message = "The tutorial was updated successfully!";
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteNews() {
      NewsDataService.delete(this.currentNews.id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: "news" });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = "";
    this.getTutorial(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
