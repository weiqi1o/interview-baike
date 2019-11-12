<template>
    <div class="header">
        <div class="search">
            <search></search>
        </div>
        <div class="nav">
            <span class="active" @click="choose($event.currentTarget)">IT</span>
            <span @click="choose($event.currentTarget)">视频</span>
            <span @click="choose($event.currentTarget)">图片</span>
            <span @click="choose($event.currentTarget)">网页</span>
        </div>

    </div>
</template>

<script>
    import search from "./search";
    export default {
        name: "headerTOP",
        components: {search},
        data() {
            return {
                lists: ""
            };
        },
        methods: {
            active(node) {
                if (!$(node).hasClass('active')) {
                    $(node).siblings().removeClass('active');
                    $(node).addClass('active')
                }
            },
            getData() {
                this.axios
                    .get("http://132.232.33.218:8081/v2/api-docs/v1/questions")
                    .then(response => {
                        if (response.status == 200) {
                            this.lists = response.data
                        }
                    });
            },
            choose(node) {
                this.active(node);
                this.getData()
            }
        },
        mounted() {

        }
    };
</script>

<style scoped lang="less">
    .header {
        width: 100%;
        padding: 0 8%;
        box-sizing: border-box;
        background: #f4f4f4 url("./../../../static/imgs/logo_search_page.png") no-repeat calc(7% - 40px) 15px;
        background-size: 40px;
        padding-top: 15px;
        .search {
            width: 640px;
        }
        .nav {
            width: 100%;
            margin: 0 auto;
            margin-top: 15px;
            & > span {
                cursor: pointer;
                color: #777;
                display: inline-block;
                margin-right: 20px;
                margin-bottom: 0;
                text-align: center;
                padding: 0 10px 5px;
                font-size: 14px;
                font-weight: 700;
                border-bottom: 2px solid #f4f4f4;
            }
            .active {
                border-color: #acacac;
            }
        }
    }
</style>
