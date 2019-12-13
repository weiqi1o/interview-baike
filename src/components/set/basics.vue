<template>
    <div class="basics"  v-if="UserInfoData.result">
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">当前头像</span></Col>
            <Col :xs="24" :md="20">
                <div class=" avatar">
                    <Avatar shape="square" :src="UserInfoData.result.avatar" size="80"/>
                    <Upload v-show="edit" class="butUpload" action="/">
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
                <input class="item input" placeholder="--" readonly="readonly" type="text" v-model="UserInfoData.result.nickName">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">手机号</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" placeholder="--" readonly="readonly" type="text" v-model="UserInfoData.result.phone">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">城市</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" readonly="readonly" placeholder="--" type="text" v-model="UserInfoData.result.city">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label">邮箱</span></Col>
            <Col :xs="24" :md="20">
                <input class="item input" readonly="readonly" type="email" placeholder="--" v-model="UserInfoData.result.email">
            </Col>
        </Row>
        <Row type="flex" justify="space-between" align="middle">
            <Col :xs="0" :md="4"><span class="label"></span></Col>
            <Col :xs="24" :md="20">
                <div class="item">
                    <button @click="editBasics">编辑</button>
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
                UserInfoData:''
            }
        },
        created(){
            this.getUserInfoData()
        },
        methods: {
            editBasics() {
                this.edit = true;
                $(".basics input").removeAttr('readonly').addClass('editIpu');
                // this.editData.name = this.editData.phone = this.editData.QQ = this.editData.email = "";
            },
            cancelBasics() {
                this.edit = false;
                $(".basics input").attr("readonly", "readonly").removeClass('editIpu');
                // this.editData.name = this.editData.phone = this.editData.QQ = this.editData.email = "-";
            },
            getUserInfoData() {
                var id = this.getStore("userId");
                if(!id){
                    this.$routes.push('/');
                    $(".landing").slideDown("fast");
                }else{
                    this.userInfo(id).then((res) => {
                        this.UserInfoData = res;

                    })
                }

            },
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
