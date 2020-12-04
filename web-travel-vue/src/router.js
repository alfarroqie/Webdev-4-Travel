import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
        path: "/",
        alias: "/news",
        name: "news",
        component: () => import("./components/NewsList")
        },
        {
        path: "/news/id/:id",
        name: "news-details",
        component: () => import("./components/NewsDetail")
        },
        // {
        //     path: "/news/cms",
        //     name: "cms",
        //     component: () => import("./components/CMS")
        // }
        // {
        // path: "/add",
        // name: "add",
        // component: () => import("./components/AddTutorial")
        // }
    ]
});