<template>
    <div class="demo-avatar">
        <a v-if="!account" href="javascript:;" @click="openLand">登陆/注册</a>
        <div v-else>
            <Dropdown>
                <Avatar class="Avatar" :src="avatar"/>
                <DropdownMenu slot="list">
                    <DropdownItem>
                        <router-link to="/setting">个人中心</router-link>
                    </DropdownItem>
                    <DropdownItem ><span @click="signOut">退出</span></DropdownItem>
                </DropdownMenu>
            </Dropdown>
            <router-link to="/setEditor" class="edit">
                <img class="iconB" src="./../../../static/imgs/b2.png" alt="">
                <span>编辑题目</span>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Bus from './../../../static/js/bus'

    export default {
        name: "headerL",
        data() {
            return {
                account: '',
                avatar: '22'
            }
        },
        created(){
            this.getUserInfoData();
        },
        methods: {
            openLand() {
                $(".landing").slideDown("fast");
            },
            getUserInfoData(){
                var id = this.getStore("userId");
                if(id){
                    this.userInfo(id).then((res) => {
                        this.account = res.result.account;
                        this.avatar = res.result.avatar;


                    })
                }
            },
            signOut(){
                this.removeStore("accessToken");
                this.removeStore("userId");
                this.account='';
                this.avatar = ''
            }
        },
        mounted() {
            var _this = this;
            Bus.$on('succ', function (val) {
                if (val) {
                    var id = this.getStore("userId");
                    this.userInfo(id).then((res) => {
                        _this.account = res.result.account;
                        _this.avatar = res.result.avatar;


                    })

                }

            })
        }
    }
</script>

<style scoped lang="less">
    .demo-avatar {
        & > a {
            font-size: 16px;
            color: black;
            cursor: pointer;
        }
        & > div {

            .edit {
                display: inline-block;
                vertical-align: middle;
                border-radius: 8px;
                padding: 3px 5px;
                background: #f5f2f0;
                padding-right: 20px;
                text-align: center;
                margin-left: 15px;
                cursor: pointer;
                & > img {

                    width: 35px;
                    vertical-align: middle;
                }
                & > span {
                    font-size: 16px;
                    color: black;
                }
            }

        }
        .ivu-dropdown-menu{
            text-align: start;
        }
    }
</style>
