<template>
    <div>
        <Tabs value="name1" :animated="false">
            <TabPane :label="label"  name="name1">
                <List>
                    <ListItem >
                        <ListItemMeta  title="This is title" description="change description" />
                        <div class="labels">
							<Button @click="isLook = true">查看</Button>
							<Modal v-model="isLook" fullscreen title="这是标题">
								<MarkdownPreview theme="oneDark" :initialValue="record.content"/>
							</Modal>
                        </div>
                        <template slot="action">
						   <Button type="success">通过</Button>
						    <Button type="error">退回</Button>
                        </template>
                    </ListItem>
                </List>
            </TabPane>
            <TabPane label="我的提交"  name="name2">标签二的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
	import {MarkdownPreview} from 'vue-meditor'
    export default {
        name: "articles",
		components: {
		    MarkdownPreview
		},
        data(){
            return{
				record:{id:2,content:"## hello \n this is test"},
				isLook: false,
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
        },
		created() {

		},
    }
</script>

<style scoped>

</style>
