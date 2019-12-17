<template>
    <div>
        <Tabs value="name1" :animated="false">
            <TabPane :label="label"  name="name1">
                <List>
                    <ListItem class="ListItem" v-for="(item,index) in data.data" :key="index">
                        <span>{{item.createTime.split(' ')[0]}} <br>{{item.createTime.split(' ')[1]}} </span>
                        <div>
                            <h2>恭喜获得{{item.val}}点声望</h2>
                            <p>{{item.reason}}</p>
                        </div>
                    </ListItem>
                </List>
                <Page v-if="Number(data.total)>10" class="Page" :total="Number(data.total)" show-elevator />
            </TabPane>
             <TabPane label="币值"  name="name2">
                 <List>
                     <ListItem class="ListItem" v-for="(item,index) in data.data" :key="index">
                         <span>{{item.createTime.split(' ')[0]}} <br>{{item.createTime.split(' ')[1]}} </span>
                         <div>
                             <h2>恭喜获得{{item.val}}币</h2>
                             <p>{{item.reason}}</p>
                         </div>
                     </ListItem>
                 </List>
                 <Page v-if="Number(data.total)>10" class="Page" :total="Number(data.total)" show-elevator />
             </TabPane>
        </Tabs>
		<!-- 传入lists中第几个，动态设置模态框中内容 -->
		<Modal v-model="isLook" fullscreen title="这是标题">
			<MarkdownPreview theme="oneDark" :initialValue="record.content"/>
		</Modal>
    </div>
</template>

<script>
	import {MarkdownPreview} from 'vue-meditor'
    export default {
        name: "scoreRecords",
		components: {
		    MarkdownPreview
		},
        data(){
            return{
				lists:'',
				record:{id:2,content:"## hello \n this is test"},
				isLook: false,
                label: (h) => {
                    return h('div', [
                        h('span', '声望值'),
                        h('Badge', {
                            props: {
                                count: 3
                            }
                        })
                    ])
                },
                data:''
            }
        },
		created() {
			this.getFame().then((res) => {
				if (res.code == 200) {
				    this.data = res.result
				}

			})
		},
        methods:{
        }
    }
</script>

<style scoped lang="less">
    .ListItem{
        display: flex;
        justify-content: space-between;
        align-items: center;

        &>div{
            width: 80%;
            &>h2{
                font-weight: 500;
                margin-bottom: 4px;
                color: #04c518;
                font-size: 14px;
                line-height: 22px;
            }
            &>p{
                color: rgba(0,0,0,.45);
                font-size: 14px;
                line-height: 22px;
            }
        }
    }
    .Page{
        margin-top: 20px;
    }

</style>
