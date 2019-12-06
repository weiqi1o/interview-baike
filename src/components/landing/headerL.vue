<template>
    <div class="demo-avatar">
        <a v-if="!account" href="javascript:;" @click="openLand">登陆/注册</a>
        <div v-else>
            <router-link to="/setting">
                <Avatar class="Avatar" :src="avatar"/>
            </router-link>
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
            var id = this.getStore("userId");
            if(id){
                this.userInfo(id).then((res) => {
                    this.account = res.result.account;
                    this.avatar = res.result.avatar;


                })
            }
        },
        methods: {
            openLand() {
                $(".landing").slideDown("fast");
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
    }
</style>
