<template>
    <div class="land">
        <div>
            <p>用户名密码登录</p>
            <span>{{msg}}</span>
            <input type="text" id="account" v-model="land.account"  placeholder="输入账号">
            <input type="password" id="password" v-model="land.password" placeholder="输入密码">
            <button @click="submit">登陆</button>
            <div>
                <a href="">忘记密码</a>
                <a href="">立即注册</a>
            </div>
            <img @click="closeLand"  src="./../../../static/imgs/close.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "landing",
        data(){
            return{
                land:{
                    account:'',
                    password:'',
                },

                msg:''
            }
        },
        methods:{
            //关闭登陆窗口
            closeLand(){
               $('.land').slideUp('fast');
            },
            //提交登陆
            submit(){
                $(".land input").removeClass('active');
                if (this.land.account =='' || this.land.account.length<5){
                    this.msg = '账号不规范';
                    $('#account').addClass('active');
                    $('#account').focus();
                    return;
                }
                if (this.land.password =='' || this.land.password.length<6){
                    this.msg = '密码不规范';
                    $('#password').addClass('active');
                    $('#password').focus();
                    return;
                }
                this.login(this.land)

            }
        }
    }
</script>

<style scoped lang="less">
    .land {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        & > div {
            width: 290px;
            height: 305px;
            background: white;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
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
            .active{
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
    }

</style>
