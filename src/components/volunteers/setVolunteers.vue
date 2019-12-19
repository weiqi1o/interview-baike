<template>
    <div>
        <Modal
                v-model="Volunteers"
                title="选择你要加入的志愿者标签"
                @on-ok="ok"
                :mask-closable="false"
                @on-cancel="cancel">
            <Tag v-for="item in labels" :key="item.id" :name="item.id" size="large" checkable color="primary"
                 @on-change="labChecked" :checked="item.checked">{{ item.name}}
            </Tag>
        </Modal>
    </div>
</template>

<script>
    export default {
        name: "setVolunteers",
        props:['join'],
        data() {
            return {
              labels: '',
                storageLabels: '',
                checkedLabelsId: [],
                Volunteers:''
            }
        },
        watch:{
            join:function(val){
                this.Volunteers = this.join
            }
        },
        created() {
            this.Labels();
            this.Volunteers = this.join
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
            ok() {
                this.joinVolunteers(this.storageLabels).then((res) => {
                    if (res.code == 200) {
                        this.$Message.success(res.msg);
                    } else {
                        this.$Message.error(res.msg);
                    }

                });

            },
            cancel() {
                this.confirm ()
                // this.$Message.info('Clicked cancel');
            },
            confirm () {
                this.$Modal.confirm({
                    title: '是否放弃加入志愿者',
                    content:'<p>亲，你准备放弃加入志愿者么？</p>',
                    onCancel: () => {
                        this.Volunteers = true
                    }
                });

            },
            //标签初始化选择
            initCheck(name) {
                this.labels.forEach((v) => {
                    if (v.id == name) {
                        v.checked = !v.checked
                    }
                });
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

<style scoped>

</style>
