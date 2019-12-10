<template>
    <div class="lists">
        <div class="header">
            <div>
                <Row>
                    <Col :xs="0" :md="12">
                        <Row>
                            <Col :xs="3" :md="2">
                                <a href="/" class="logo">
                                    <img src="./../../static/imgs/logo_search_page.png" alt=""/>
                                </a>
                            </Col>
                            <Col :xs="21" :md="22">
                                <div class="search">
                                    <search></search>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                    <Col :xs="24" :md="12">
                        <headerL></headerL>
                    </Col>
                </Row>
            </div>
        </div>
        <div class="content">
            <Row type="flex" justify="space-between" >
                <Col span="16">
                    <List item-layout="vertical">
                        <ListItem v-for="items in lists.data" :key="items.id">
                            <router-link :to="{name:'listsDetails',query:{id:items.id}}">
                                <ListItemMeta :avatar="items.avatar" :title="items.title" :description="items.summary"/>
                            </router-link>
                            {{ items.summary}}
                            <div class="labels">
                                <Tag v-for="item in items.labels" checkable color="primary">{{item.name}}</Tag>
                            </div>
                            <template slot="action">
                                <li>
                                    <Icon type="ios-star-outline"/>
                                    123
                                </li>
                                <li>
                                    <Icon type="ios-thumbs-up-outline"/>
                                    234
                                </li>
                                <li>
                                    <Icon type="ios-chatbubbles-outline"/>
                                    345
                                </li>
                            </template>
                            <template slot="extra">
                                <img src="https://dev-file.iviewui.com/5wxHCQMUyrauMCGSVEYVxHR5JmvS7DpH/large"
                                     style="width: 280px">
                            </template>
                        </ListItem>
                        <Page v-if="lists.total>10" class="page" :total="lists.total"/>
                    </List>
                </Col>
                <Col span="7">
                    <div class="card">
                        <Card >
                            <p slot="title">No border title</p>
                            <p>Content of no border type. Content of no border type. Content of no border type. Content of no border type. </p>
                        </Card>
                    </div>
                </Col>
            </Row>

        </div>
    </div>
</template>

<script>
    import headerL from "../components/landing/headerL";
    import search from "../components/common/search";
    import Bus from "./../../static/js/bus";

    export default {
        name: "lists",
        components: {headerL,search},
        data() {
            return {
                lists: ''
            };
        },
        mounted() {
            var _this = this;
            Bus.$on("newList", function (val) {
                _this.lists = val;
            });
        }
    };
</script>

<style scoped lang="less">
    .content {
        max-width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        .page {
            margin-top: 30px;
            text-align: center;
        }
    }
    .header{
        padding: 10px 0;
        border-bottom: 1px solid #d8d8d8;
        &>div{
            max-width: 1200px;
            margin: 0 auto;
        }
    }
    .logo {
        vertical-align: middle;
        margin-right: 15px;
        & > img {
            width: 40px;
        }
    }
    .seach {
        width: 90%;
        display: inline-block;
        vertical-align: middle;
    }
</style>
