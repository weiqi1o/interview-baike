<template>
    <div>
        <Tabs value="name1" :animated="false">
            <TabPane label="我的标签" name="name1">
                <Tag v-for="item in checkedLabels" v-if="checkedLabels" :key="item.id" type="dot" color="cyan" :name="item.id" size="large"
                     closable
                     @on-close="handleClose2">{{ item.name}}
                </Tag>
                <Button type="dashed" @click="handleAdd">添加标签</Button>
                <Modal
                       v-model="modal1"
                       title="选择标签"
                       @on-ok="ok">
                    <Tag v-for="item in labels" :key="item.id" :name="item.id" size="large" checkable color="primary"
                         @on-change="labChecked" :checked="item.checked">{{ item.name}}
                    </Tag>
                    <div>
                        <Input v-model="labelVal" placeholder="自定义标签" clearable style="width: 200px"/>
                        <Button class="but" type="primary" @click="addLabel">添加</Button>
                    </div>

                </Modal>
            </TabPane>
            <TabPane label="题目" name="name2">
                <List>
                    <ListItem v-for="items in 6" :key="items.id">
                        <ListItemMeta title="java?" description="java？"/>
                        <div class="labels">
                            <Button @click="isLook = true">查看</Button>
                        </div>
                        <template slot="action">
                            <Button type="success">通过</Button>
                            <Button type="error">退回</Button>
                        </template>
                    </ListItem>
                </List>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
    export default {
        name: "volunteers",
        data() {
            return {
                isLook: false,
                labels: [],
                myLabels:'',
                modal1: false,
                labelVal: '',
                checkedLabels: [],
                checkedLabelsId: [],
                storageLabels: [],
            }
        },
        created(){
            this. Labels();
            this.getMyLabels()
        },
        methods:{
            //获取标签
            Labels() {
                this.getLabels().then((res) => {
                    var data = res.result;
                    this.$nextTick(() => {
                        data.forEach((v) => {
                            v.checked = false
                        });
                        this.labels = data
                    })
                });


            },
            //获取我的志愿者标签
            getMyLabels() {
                this.myVolunteersLabels().then((res) => {
                    if(res.code == 200){
                        this.myLabels = res.result;
                    }
                });


            },
            //添加自定义标签
            addLabel() {
                var newLab = true;
                this.labels.forEach((v) => {
                    if (v.name.toLowerCase() == $.trim(this.labelVal) && $.trim(this.labelVal)) {
                        newLab = false
                        this.$Message.error('该标签已存在！');
                    }
                    return newLab
                });
                if (newLab && $.trim(this.labelVal)) {
                    this.addLabels({name: $.trim(this.labelVal)}).then((res) => {
                        this.labels.push({
                            checked: true,
                            name: $.trim(this.labelVal),
                            id: res.result.id
                        });
                        this.storageLabels.push({
                            checked: true,
                            name: $.trim(this.labelVal),
                            id: res.result.id
                        })
                    })
                }
            },
            //打开添加标签
            handleAdd() {
                this.modal1 = true;
            },
            //标签初始化选择
            initCheck(name) {
                this.labels.forEach((v) => {
                    if (v.id == name) {
                        v.checked = !v.checked
                    }
                });
            },
            //删除已选择标签
            handleClose2(event, name) {
                var rlab = '';
                this.checkedLabels.forEach((v) => {
                    if (v.id == name) {
                        rlab = v;
                    }
                });
                this.initCheck(name);
                this.checkedLabelsId.splice(this.checkedLabelsId.indexOf(name), 1)
                const index = this.checkedLabels.indexOf(rlab);
                this.checkedLabels.splice(index, 1);

            },
            //确认标签选择
            ok() {
                this.checkedLabels = this.storageLabels
            },
            //选择标签
            labChecked(checked, name) {
                if (checked) {
                    this.checkedLabelsId.push(name);
                    this.initCheck(name);
                } else {
                    this.checkedLabelsId.splice(this.checkedLabelsId.indexOf(name), 1);
                    this.initCheck(name);
                    return;
                }
                this.storageLabels = [];
                this.labels.forEach((v) => {
                    var vi = v;
                    this.checkedLabelsId.forEach((h) => {
                        if (vi.id == h) {
                            this.storageLabels.push(vi)
                        }
                    })

                })
            },
        }

    }
</script>

<style scoped>

</style>
