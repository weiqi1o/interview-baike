<template>
    <div class="index">
        <div class="header">
            <div class="demo-avatar">
                <a v-if="!avatar" href="javascript:;" @click="openLand">登陆/注册</a>
                <div v-else>
                    <router-link to="/setting">
                        <Avatar class="Avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    </router-link>
                    <div>
                        <img class="iconB" src="./../../static/imgs/b2.png" alt="">
                        <span>编辑题目</span>
                    </div>
                </div>

            </div>

        </div>
        <div class="searchBox">
            <img alt="Vue logo" src="./../../static/imgs/logo_index_zh_CN.png"/>
            <search></search>
            <p>这是一个<span>不追踪</span>你的搜索引擎</p>
        </div>
        <landing class="landing"></landing>
    </div>
</template>

<script>
    // @ is an alias to /src
    import search from "./../components/common/search";
    import landing from "./../components/landing/landing";

    export default {
        name: "index",
        components: {search, landing},
        data() {
            return {
                val: "",
                avatar: '002'
            };
        },
        methods: {
            openLand() {
                $(".landing").slideDown("fast");
            }
        }
    };
</script>

<style lang="less">
    .index {
        .header {
            width: 90%;
            margin: 0 auto;
            text-align: end;
            padding: 10px 0;
            .demo-avatar {
                & > a {
                    font-size: 16px;
                    color: black;
                    cursor: pointer;
                }
                & > div {

                    &>div{
                        display: inline-block;
                        vertical-align: middle;
                        border-radius: 8px;
                        padding: 3px 5px;
                        background: #f5f2f0;
                        padding-right:20px;
                        text-align: center;
                        margin-left: 15px;
                        cursor: pointer;
                        & > img {

                            width: 35px;
                            vertical-align: middle;
                        }
                        & > span {
                            font-size: 16px;
                        }
                    }

                }
            }

        }
        .searchBox {
            width: 640px;
            position: fixed;
            top: 30%;
            left: 50%;
            transform: translate(-50%, -50%);
            & > img {
                width: 460px;
                display: block;
                margin: 0 auto;
                margin-bottom: 25px;
            }
            & > p {
                margin-top: 20px;
                color: #9b9b9b;
                font-size: 16px;
                font-weight: 400;
                & > span {
                    color: #177cb0;
                    margin: 0 10px;
                }
            }
        }
        .landing {
            display: none;
        }
    }
</style>
