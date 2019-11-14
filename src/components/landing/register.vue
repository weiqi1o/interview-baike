<template>
    <div class="register">
    <p>用户注册</p>
    <span>{{msg}}</span>
    <input type="text" id="accountR" v-model="register.account" placeholder="输入账号">
    <input type="text" id="nickName" v-model="register.nickName" placeholder="昵称">
    <input type="password" id="password2" v-model="password2" placeholder="输入密码">
    <input type="password" id="passwordR" v-model="register.password" placeholder="确认输入密码">
    <button @click="submitRegister">立即注册并登录</button>
    <div>
        <a href="javascript:;" @click="changeLand">已有账号立即登录</a>
    </div>
</div>
</template>

<script>
    export default {
        name: "register",
        data() {
            return {
                register: {
                    account: '',
                    password: '',
                    nickName: ''
                },
                password2: '',
                msg: '',
                show:true
            }
        },
        methods: {
            //去登录
            changeLand(){
                this.$emit('registerShow',!this.show)

            },
            //提交注册
            submitRegister() {
                $(".register input").removeClass('active');
                if (this.register.account == '' || this.register.account.length < 5) {
                    this.msg = '账号不规范';
                    $('#accountR').addClass('active');
                    $('#accountR').focus();
                    return;
                }
                if (this.register.nickName == '' ) {
                    this.msg = '昵称不能为空';
                    $('#nickName').addClass('active');
                    $('#nickName').focus();
                    return;
                }
                if (this.password2 == '' || this.password2.length < 6) {
                    this.msg = '密码不规范';
                    $('#password2').addClass('active');
                    $('#password2').focus();
                    return;
                }
                if (this.register.password != this.password2) {
                    this.msg = '两次密码输入不一致';
                    $('#passwordR').addClass('active');
                    $('#passwordR').focus();
                    return;
                }
                this.regist(this.register)

            }
        }
    }
</script>

<style scoped lang="less">
    .register {
        width: 350px;
        height: 400px;
        background: white;
        padding: 30px;
        box-sizing: border-box;
        & > p {
            text-align: center;
            font-size: 20px;
        }
        & > span {
            color: #fc4343;
            min-height: 14px;
            font-size: 12px;
            margin-bottom: 2px;
            margin-top: 5px;
            display: block;
        }
        & > input {
            width: 100%;
            height: 35px;
            margin-bottom: 15px;
            text-indent: 1em;
            outline: none;
        }
        .active {
            border: none;
            border: 1px solid #409eff;
        }
        & > button {
            width: 100%;
            height: 45px;
            background: #33a9fa;
            outline: none;
            border: none;
            font-size: 16px;
            font-weight: 800;
            cursor: pointer;
            color: #fff;
            border-radius: 3px;
            margin-bottom: 15px;
        }
        & > div {
            display: flex;
            justify-content: space-between;
            & > a {
                font-size: 12px;
                color: #33a9fa;
                text-decoration: none;
                &:hover {
                    color: rgba(51, 169, 250, 0.55);
                }
            }
        }
        & > img {
            position: absolute;
            top: 20px;
            right: 15px;
            width: 15px;
            cursor: pointer;
            z-index: -1;
        }
    }

</style>
