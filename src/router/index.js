import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/Index";
import Lists from "../views/lists";
import setting from "../views/setting";
import edit from "../views/edit"

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
    },
    {
        path: "/edit",
        name: "edit",
        component: edit
    }
];

const router = new VueRouter({
    routes
});

export default router;
