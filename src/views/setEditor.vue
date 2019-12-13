<template>
    <div class="edit">
        <div class="title">
            <input type="text" v-model="title" placeholder="添加标题">
            <Tag v-for="item in checkedLabels" v-if="checkedLabels" :key="item.id" :name="item.id" size="large" closable
                 @on-close="handleClose2">{{ item.name}}
            </Tag>
            <Button type="dashed" @click="handleAdd">选择标签</Button>
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
            <Divider/>
            <textarea v-model="description" placeholder="描述 支持markdown (可选)" rows="3"></textarea>
        </div>

    </div>
</template>

<script>
    import headerTop from "../components/common/headerTop";

    export default {
        name: "edit",
        components: {headerTop},
        data() {
            return {
                title: '',
                labels: [],
                description: '',
                modal1: false,
                labelVal: '',
                checkedLabels: [],
                checkedLabelsId: [],
                storageLabels: []

            }
        },
        created() {
            this.Labels()
        },
        methods: {
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
            to() {
                if (!this.title) {
                    this.$Message.error('题目标题不能为空！');
                    return;
                }
                this.$emit('titleData', {
                    title: this.title,
                    labels: this.checkedLabels,
                    description: this.description
                })
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
            }
        }
    }
</script>

<style lang="less">
    .edit {

        margin: 0 auto;
        & > h1 {
            max-width: 1200px;
            margin: 0 auto;
            font-weight: normal;
            margin-top: 20px;
            font-size: 25px;
        }
        .title {
            max-width: 1200px;
            margin: 15px auto;
            & > input {
                font-size: 25px;
                border: 1px solid #d8d8d8;
                outline: none;
                width: 100%;
                height: 50px;
                text-indent: 1em;
                margin-bottom: 15px;
                color: #515a6e;
                border-radius: 6px;
            }
            & > input:nth-of-type(2) {
                font-size: 20px;
            }
            & > textarea {
                font-size: 20px;
                border: none;
                outline: none;
                width: 100%;
                color: #515a6e;
                resize: none;
                margin-top: 20px;
            }

        }
        .content {
            max-width: 1200px;
            margin: 0 auto;
            .edit {
                display: block;
                width: 280px;
                border-radius: 40px;
                padding: 13px 5px;
                background: #333333;
                padding-right: 20px;
                text-align: center;
                margin: 80px auto;
                cursor: pointer;
                color: white;

                & > img {

                    width: 40px;
                    vertical-align: middle;
                }
                & > span {
                    font-size: 25px;
                    color: white;
                    vertical-align: middle;
                }
            }
        }

    }

    .but {
        margin-left: 15px;
    }

</style>
