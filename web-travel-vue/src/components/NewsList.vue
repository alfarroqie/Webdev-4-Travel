<template>
  <div class="list row">
    <div class="col-md-12">
      <div class="input-group mb-3">
        <input
          type="text"
          class="form-control"
          placeholder="Search by title"
          v-model="title"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="searchTitle"
          >
            Search
          </button>
        </div>
      </div>
    </div>
    <div class="col-md-12">
      <h1>Artikel Terbaru</h1>
      <ul class="list-group">
        <!-- <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(thisNews, index) in news"
          :key="index"
          @click="setActiveNews(thisNews, index)"
        > -->
        <li
          class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(thisNews, index) in news"
          :key="index"
        >
          <div class="card">
            <div class="card-horizontal">
              <div class="img-square-wrapper">
                <img class="" :src="'../assets/' + thisNews.pictLink" alt="Image Card" />
              </div>
              <div class="card-body">
                <router-link :to="'/news/id/' + thisNews.id"> <h4 class="card-title">{{ thisNews.title }}</h4> </router-link>
                <!-- <p class="card-text">
                  {{ thisNews.content }}
                </p>
                -->
              </div>
            </div>
          </div>
        </li>
      </ul>

      <!-- <button class="m-3 btn btn-sm btn-danger" @click="removeAllNews">
        Remove All
      </button> -->
    </div>
    <!-- <div class="col-md-6">
      <div v-if="currentNews">
        <h4>News</h4>
        <div>
          <label><strong>Title:</strong></label> {{ currentNews.title }}
        </div>
        <div>
          <label><strong>Content:</strong></label>
          {{ currentNews.content }}
        </div>

        <router-link :to="'/news/' + currentNews.id" class="badge badge-warning"
          >Edit</router-link
        >
      </div>
      <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
      </div>
    </div> -->
  </div>
</template>

<script>
import NewsDataService from "../services/NewsDataService";

export default {
  name: "news-list",
  data() {
    return {
      news: [],
      currentNews: null,
      currentIndex: -1,
      title: "",
    };
  },
  methods: {
    retrieveNews() {
      NewsDataService.getAll()
        .then((response) => {
          this.news = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },

    refreshList() {
      this.retrieveNews();
      this.currentNews = null;
      this.currentIndex = -1;
    },

    setActiveNews(thisNews, index) {
      this.currentNews = thisNews;
      this.currentIndex = index;
    },

    removeAllNews() {
      NewsDataService.deleteAll()
        .then((response) => {
          console.log(response.data);
          this.refreshList();
        })
        .catch((e) => {
          console.log(e);
        });
    },

    searchTitle() {
      NewsDataService.findByTitle(this.title)
        .then((response) => {
          this.news = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.retrieveNews();
  },
};
</script>

<style>
h1 {
  text-align: center;
  padding-top: 30px;
  padding-bottom: 30px;
}

.list {
  text-align: left;
  margin: 120px auto;
}

.card-horizontal {
  display: flex;
  flex: 1 1 auto;
}
</style>