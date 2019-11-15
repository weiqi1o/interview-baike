import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import Lists from "../views/lists";
import setting from "../views/setting";

Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "index",
        component: Index
    },
    {
        path: "/lists",
        name: "lists",
        component: Lists
    },
    {
        path: "/setting",
        name: "setting",
        component: setting
    }
];

const router = new VueRouter({
    routes
});

export default router;
