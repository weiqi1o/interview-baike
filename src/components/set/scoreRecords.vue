<template>
    <div>
        <Tabs value="name1" :animated="false">
            <TabPane :label="label"  name="name1">
                <List>
                    <ListItem class="ListItem" v-for="(items,index) in 7" :key="index">
                        <span>2019-12-11 <br> 15:30:30</span>
                        <div>
                            <h2>恭喜获得4点声望</h2>
                            <p>提交的***问题成功通过</p>
                        </div>
                    </ListItem>
                </List>
            </TabPane>
             <TabPane label="币值"  name="name2">
                 <List>
                     <ListItem class="ListItem" v-for="(items,index) in 7" :key="index">
                         <span>2050-01-01 <br> 00:00:00</span>
                         <div>
                             <h2>恭喜获得4分</h2>
                             <p>提交的***问题成功通过</p>
                         </div>
                     </ListItem>
                 </List>
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
                }
            }
        },
		created() {
			this.getCheckRecord('').then((res) => {
				if (res.code == 200) {
					this.lists = res.result
				}

			})
		},
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

</style>
