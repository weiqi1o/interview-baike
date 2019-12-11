<template>
    <div>
        <Tabs value="name1" :animated="false">
            <TabPane  name="name1" label="文章">

                <List>
                    <ListItem>
                        <ListItemMeta  title="This is title" description="This is description, this is description." />
                        <div class="labels">
                            <Tag  color="primary">未审核</Tag>
                            <Tag  color="warning">审核中</Tag>
                            <Tag  color="success">审核通过</Tag>
                            <Tag  color="error">审核失败</Tag>
                        </div>
                        <template slot="action">
                            <li>
                                <a href="">编辑</a>
                            </li>
                        </template>
                    </ListItem>
                </List>
            </TabPane>
            <TabPane :label="label"  name="name2">标签二的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "articles",
        data(){
            return{
                label: (h) => {
                    return h('div', [
                        h('span', '审核中'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                }
            }
        }
    }
</script>

<style scoped>

</style>
