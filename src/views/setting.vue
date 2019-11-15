<template>
    <div class="setting">
        <div class="header">
            <div>
                <div class="search">
                    <a href="/">
                        <img src="./../../static/imgs/logo_search_page.png" alt=""/>
                    </a>
                    <search></search>
                </div>
                <div class="demo-avatar">
                    <a v-if="!avatar" href="javascript:;" @click="openLand">登陆/注册</a>
                    <div v-else>
                        <router-link to="/setting">
                            <Avatar class="Avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                        </router-link>
                        <router-link to="/edit" class="edit">
                            <img class="iconB" src="./../../static/imgs/b2.png" alt="">
                            <span>编辑题目</span>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="banner">
            <div>
                <div>
                    <Avatar size="large" class="Avatar" src="https://i.loli.net/2017/08/21/599a521472424.jpg"/>
                    <div>
                        <h4>你好你好你好</h4>
                        <div>
                            <span v-for="item in 5">java</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div>
                        <span>6</span>
                        <span>发布题目</span>
                    </div>
                    <div>
                        <span>200</span>
                        <span>浏览数总数</span>
                    </div>
                    <div>
                        <span>100</span>
                        <span>点赞总数</span>
                    </div>
                </div>
            </div>

        </div>
        <div class="content">
            <Menu class="nav" :theme="theme3" active-name="1">
                <MenuGroup title="基础信息">
                    <MenuItem name="1">
                        <Icon type="ios-person"/>
                        个人信息
                    </MenuItem>
                    <MenuItem name="2">
                        <Icon type="md-key"/>
                        账号管理
                    </MenuItem>
                </MenuGroup>
                <MenuGroup title="内容管理">
                    <MenuItem name="3">
                        <Icon type="md-document"/>
                        文章管理
                    </MenuItem>
                    <MenuItem name="4">
                        <Icon type="md-chatbubbles"/>
                        评论管理
                    </MenuItem>
                </MenuGroup>
            </Menu>
            <div class="item">
                <basics></basics>
            </div>
        </div>

    </div>
</template>

<script>
    import search from "./../components/common/search";
    import basics from "./../components/set/basics"

    export default {
        name: "setting",
        components: {search, basics},
        data() {
            return {
                avatar: true,
                theme3: 'light'
            }
        }
    }
</script>

<style scoped lang="less">
    .setting {
        width: 100%;
        .header {
            width: 100%;
            background: #333;
            padding: 15px 0;
            & > div {
                width: 90%;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .search {
                    & > a {
                        vertical-align: middle;
                        margin-right: 15px;
                        & > img {
                            width: 40px;
                        }
                    }
                    & > div {
                        width: 640px;
                        display: inline-block;
                    }
                }
                .demo-avatar {
                    & > a {
                        font-size: 16px;
                        color: black;
                        cursor: pointer;
                    }
                    &>div {
                        .edit {
                            display: inline-block;
                            vertical-align: middle;
                            border-radius: 8px;
                            padding: 3px 5px;
                            background: #f5f2f0;
                            padding-right: 20px;
                            text-align: center;
                            margin-left: 15px;
                            cursor: pointer;
                            & > img {

                                width: 35px;
                                vertical-align: middle;
                            }
                            & > span {
                                font-size: 16px;
                                color: black;
                            }
                        }

                    }
                }

            }

        }
        .banner {
            background: #0092ca;
            width: 100%;
            padding: 30px 0;
            & > div {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 1200px;
                margin: 0 auto;
                & > div {
                    .Avatar {
                        width: 100px;
                        height: 100px;
                    }
                    & > div {
                        margin-left: 20px;
                        display: inline-block;
                        & > h4 {
                            color: white;
                            font-size: 20px;
                            margin-bottom: 10px;
                        }
                        & > div {
                            & > span {
                                font-size: 15px;
                                padding: 0 8px;
                                background: white;
                                border-radius: 2px;
                                display: inline-block;
                                margin-right: 5px;
                            }
                        }
                        & > span:nth-of-type(1) {
                            display: block;
                            font-size: 26px;
                            color: white;
                            font-weight: bold;
                            text-align: center;
                        }
                        & > span:nth-of-type(2) {
                            font-size: 12px;
                            color: white;
                            text-align: center;
                        }
                    }
                }
                & > div:nth-of-type(2) {
                    background: #1c4763;
                    padding: 5px 10px;
                    & > div {
                        margin-left: 0;
                        padding: 0 35px;
                        border-right: 1px solid #0092ca;
                    }
                    & > div:nth-last-of-type(1) {
                        border-right: none;
                    }
                }
            }

        }
        .content {
            width: 1200px;
            margin: 0 auto;
            margin-top: 30px;
            .nav {
                display: inline-block;
            }
            .item {
                width: 958px;
                display: inline-block;
                vertical-align: top;
                padding: 30px;
                box-sizing: border-box;
            }
        }

    }

</style>
