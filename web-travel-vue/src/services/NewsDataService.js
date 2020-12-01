import http from "../http-common";

class NewsDataService {
    getAll() {
        return http.get("/news");
    }

    get(id) {
        return http.get(`/news/${id}`);
    }

    create(data) {
        return http.post("/news", data);
    }

    update(id, data) {
        return http.put(`/news/${id}`, data);
    }

    delete(id) {
        return http.delete(`/news/${id}`);
    }

    deleteAll() {
        return http.delete(`/mews`);
    }

    findByTitle(title) {
        return http.get(`/news?title=${title}`);
    }
}

export default new NewsDataService();