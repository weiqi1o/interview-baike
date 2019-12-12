<template>
    <div class="edit">
        <headerTop></headerTop>
        <div class="title">
            <input type="text" v-model="val.title" placeholder="添加标题">
			<Divider/>
            <Tag v-for="item in val.labels"   :key="item" :name="item" size="large" closable @on-close="handleClose2">{{ item}}</Tag>
            <Button icon="ios-add" type="dashed"   @click="handleAdd">添加标签</Button>
            <Modal
                    v-model="modal1"
                    title="搜索标签"
                    @on-ok="ok">
                <Input v-model="label" placeholder="输入标签名" clearable style="width: 200px" />
            </Modal>
			<Divider/>
            <textarea v-model="val.description" placeholder="描述 支持markdown (可选)" rows="5"></textarea>
        </div>
        <Divider/>
        <div class="content">
            <h2>答案</h2>
            <div @click="to" class="edit">
                <img class="iconB" src="./../../static/imgs/b2.png" alt="">
                <span>写答案</span>
            </div>
        </div>

    </div>
</template>

<script>
    import headerTop from "../components/common/headerTop";
    export default {
        name: "edit",
        components:{headerTop},
        data() {
            return {
                val:{
                    title:'',
                    labels:[],
                    description:''
                },
                modal1: false,
                label:'',

            }
        },
        methods: {
            handleAdd () {
                this.modal1= true;
            },
            handleClose2 (event, name) {
                const index = this.val.labels.indexOf(name);
                this.val.labels.splice(index, 1);
            },
            ok () {
                if (this.label && this.val.labels.indexOf(this.label)<0) {
                    this.val.labels.push(this.label);
                }else{
                    this.$Message.warning('标签为空或已存在');
                }
            },
            to(){
                if(!this.val.title){
                    this.$Message.error('题目标题不能为空！');
                    return;
                }
               this.$router.push({path:'/markdown',query:{v:this.val}})
            }
        }
    }
</script>

<style lang="less">
    .edit {
        & > h1 {
            width: 70%;
            margin: 0 auto;
            font-weight: normal;
            margin-top: 20px;
            font-size: 25px;
        }
        .title {
            width: 70%;
            margin: 0 auto;
            &>input {
                font-size: 32px;
                border: none;
                outline: none;
                width: 100%;
                margin-bottom:30px ;
                font-weight: bold;
                color: #515a6e;
            }
            &>input:nth-of-type(2){
                font-size: 20px;
            }
            &>textarea{
                font-size: 20px ;
                border: none;
                outline: none;
                width: 100%;
                color: #515a6e;
                resize:none;
                margin-top: 20px;
            }

        }
        .content{
            width: 70%;
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
                    font-size:25px;
                    color: white;
                    vertical-align: middle;
                }
            }
        }

    }

</style>
