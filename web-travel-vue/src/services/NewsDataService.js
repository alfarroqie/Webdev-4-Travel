import http from "../http-common";

class NewsDataService {
    getAll() {
        return http.get("/news");
    }

    get(id) {
        return http.get(`/news/id/${id}`);
    }

    create(data) {
        return http.post("/news", data);
    }

    update(id, data) {
        return http.put(`/news/id/${id}`, data);
    }

    delete(id) {
        return http.delete(`/news/${id}`);
    }

    deleteAll() {
        return http.delete(`/news`);
    }

    findByTitle(title) {
        return http.get(`/news//${title}`);
    }
}

export default new NewsDataService();