<template>
    <div class="lists">
        <headerTop></headerTop>
        <div class="content">
            <List item-layout="vertical">
                <ListItem v-for="items in lists.data" :key="items.id">
                    <ListItemMeta :avatar="items.avatar" :title="items.title" :description="items.summary"/>
                    {{ items.summary}}
                    <div class="labels">
                        <Tag  v-for="item in items.labels" checkable color="primary">{{item.name}}</Tag>
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
                <Page v-if="lists.total>10" class="page" :total="lists.total" />
            </List>
        </div>
    </div>
</template>

<script>
    import headerTop from "../components/common/headerTop";
    import pages from "../components/common/pages";
    import Bus from "./../../static/js/bus";

    export default {
        name: "lists",
        components: {headerTop, pages},
        data() {
            return {
                lists:''
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
        width: 1200px;
        margin: 0 auto;
        margin-top: 20px;
        .page{
            margin-top: 30px;
            text-align: center;
        }
    }
</style>
