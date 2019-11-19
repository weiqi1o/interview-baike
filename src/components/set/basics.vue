<template>
    <div class="basics">
        <div>
            <span>当前头像</span>
            <div>
                <Avatar shape="square" src="https://i.loli.net/2017/08/21/599a521472424.jpg" size="80"/>
                <Upload v-show="edit" class="butUpload" action="//jsonplaceholder.typicode.com/posts/">
                    <span>上传头像</span>
                </Upload>
            </div>
        </div>
        <div>
            <span>用户名</span>
            <p>生生世世生生世世是事实</p>
        </div>
        <div>
            <span>姓名</span>
            <input readonly="readonly" type="text" v-model="editData.name">
        </div>
        <div>
            <span>手机号</span>
            <input readonly="readonly" type="text" v-model="editData.phone">
        </div>
        <div>
            <span>QQ号</span>
            <input  readonly="readonly" type="text" v-model="editData.QQ">
        </div>
        <div>
            <span>邮箱</span>
            <input readonly="readonly" type="email" v-model="editData.email">
        </div>
        <div>
            <span></span>
            <button @click="editBasics">编辑资料</button>
            <button v-show="edit" @click="cancelBasics">取消</button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "basics",
        data(){
            return{
                edit:'',
                editData:{
                    name:"-",
                    phone:'-',
                    QQ:'-',
                    email:'-'

                }
            }
        },
        methods:{
            editBasics(){
                this.edit = true;
                $(".basics input").removeAttr('readonly').addClass('editIpu');
                this.editData.name = this.editData.phone = this.editData.QQ = this.editData.email = "";
            },
            cancelBasics(){
                this.edit = false;
                $(".basics input").attr("readonly", "readonly").removeClass('editIpu');
                this.editData.name = this.editData.phone = this.editData.QQ = this.editData.email = "-";
            }
        }
    }
</script>

<style scoped lang="less">
    .basics{
        &>div{
            margin-bottom: 20px;
            &>span{
                width: 120px;
                color: #818181;
                font-size: 16px;
                min-height: 2px;
                display: inline-block;
                text-align: end;
                margin-right: 30px;
            }
            &>div{
                display: inline-block;
                vertical-align: top;
                position: relative;
                .butUpload{
                    position: absolute;
                    height: 20px;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    z-index: 5;
                    background: rgba(0, 0, 0, 0.6);
                    cursor: pointer;
                    span{
                        display: block;
                        width: 80px;
                        line-height: 20px;
                        font-size: 12px;
                        color: white;
                        text-align: center;
                    }

                }
            }
            &>input{
                width: 300px;
                height: 40px;
                outline: none;
                border: none;
                /*border: 1px solid #d8d8d8;*/
                border-radius: 3px;
                text-indent: 1em;

            }
            .editIpu{
                border: 1px solid #d8d8d8 !important;
            }
            &>p{
                display: inline-block;
            }
            &>button{
                font-size: 16px;
                margin-right: 10px;
                border: 1px solid #00baf2;
                border-radius: 3px;
                height: 40px;
                width: 150px;
                line-height: 1;
                color: #FFF;
                background-color: #00baf2;
                padding: 0px 20px;
                cursor: pointer;
                outline: none;
            }
            &>button:nth-of-type(2){
                background: white;
                color:#00baf2 ;
                margin-left: 10px;
            }
        }
    }

</style>
