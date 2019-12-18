<template>
    <div class="basics"  v-if="UserInfoData.result">
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">当前头像</span></Col>
            <Col :xs="24" :md="20">
                <div class=" avatar item" >
                    <Avatar shape="square" :src="val.avatar" size="80"/>
                    <Upload v-show="edit" :before-upload="handleUpload" class="butUpload" action="">
                        <span>上传头像</span>
                    </Upload>
                </div>
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">用户名</span></Col>
            <Col :xs="24" :md="20">
                <p class="item">{{UserInfoData.result.account}}</p>
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">昵称</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" placeholder="--" readonly="readonly" type="text" v-model="val.nickName">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">手机号</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" placeholder="--" readonly="readonly" type="text" v-model="val.phone">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">城市</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" readonly="readonly" placeholder="--" type="text" v-model="val.city">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">邮箱</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" readonly="readonly" type="email" placeholder="--" v-model="val.email">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label"></span></Col>
            <Col :xs="24" :md="20">
                <div class="item">
                    <button v-if="edit" @click="submit">保存</button>
                    <button v-else @click="editBasics">编辑</button>
                    <button v-show="edit" @click="cancelBasics">取消</button>
                </div>

            </Col>
        </Row>

    </div>
</template>

<script>
    export default {
        name: "basics",
        data() {
            return {
                edit: '',
                UserInfoData:'',
                val:{
                    nickName:'',
                    phone:'',
                    city:'',
                    email:'',
                    avatar: null,
                }
            }
        },
        created(){
            this.getUserInfoData()
        },
        methods: {
            handleUpload (file) {
                // this.val.avatar = file;
                console.log(file)
                return false;
            },
            editBasics() {
                this.edit = true;
                $(".basics input").removeAttr('readonly').addClass('editIpu');
            },
            cancelBasics() {
                this.edit = false;
                $(".basics input").attr("readonly", "readonly").removeClass('editIpu');
            },
            getUserInfoData() {
                var id = this.getStore("userId");
                this.userInfo(id).then((res) => {
                    this.UserInfoData = res;
                    this.val = {
                        nickName:this.UserInfoData.result.nickName,
                        phone:this.UserInfoData.result.phone,
                        city:this.UserInfoData.result.city,
                        email:this.UserInfoData.result.email,
                        avatar:this.UserInfoData.result.avatar
                    }

                })

            },
            submit(){
                this.userInfoEdit(this.getStore("userId"),this.val).then((res)=>{
                    if(res.code==200){
                        this.$Message.success(res.msg);
                        this.edit = false;
                        this.edit = false;
                        $(".basics input").attr("readonly", "readonly").removeClass('editIpu');
                    }else{
                        this.$Message.error(res.msg);
                    }
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .basics {
        & > div {
            margin-bottom: 20px;
            .label {
                width: 100%;
                color: #818181;
                font-size: 16px;
                min-height: 2px;
                display: inline-block;
            }
            .item {
                display: inline-block;
                vertical-align: top;
                position: relative;
                width: 100%;
                white-space: nowrap;
                .butUpload {
                    position: absolute;
                    height: 20px;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    z-index: 5;
                    background: rgba(0, 0, 0, 0.6);
                    cursor: pointer;
                    width: 80px;
                    span {
                        display: block;
                        width: 80px;
                        line-height: 20px;
                        font-size: 12px;
                        color: white;
                        text-align: center;
                    }

                }
                & > button {
                    font-size: 16px;
                    margin-right: 10px;
                    border: 1px solid #00baf2;
                    border-radius: 3px;
                    height: 40px;
                    width: 20%;
                    line-height: 1;
                    color: #FFF;
                    background-color: #00baf2;
                    padding: 0px 20px;
                    cursor: pointer;
                    outline: none;
                }
                & > button:nth-of-type(2) {
                    background: white;
                    color: #00baf2;
                    margin-left: 10px;
                }
            }
            .input{
                width: 60%;
                text-indent: 1em;
                height: 40px;
                outline: none;
                border: none;
                border-radius: 3px;
            }
            .avatar{
                display: inline-block;
                vertical-align: top;
                position: relative;
            }
            .editIpu {
                border: 1px solid #d8d8d8 !important;
            }


        }
    }
    @media all and (max-width:480px) {
        .item{
            &>button{
                width: 50% !important;
            }
        }
        .input{
            width: 100% !important;
        }
    }

</style>
