import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index";
import Lists from "../views/lists";
import setting from "../views/setting";
import setEditor from "../views/setEditor"

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
        path: "/setEditor",
        name: "setEditor",
        component: setEditor
    }
];

const router = new VueRouter({
    routes
});

export default router;
