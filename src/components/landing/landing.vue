<template>
  <div class="land">
    <div>
      <div class="landBox" v-show="landing">
        <p>用户名密码登录</p>
        <span>{{ msg }}</span>
        <input
          type="text"
          id="account"
          v-model="land.account"
          placeholder="输入账号"
        />
        <input
          type="password"
          id="password"
          v-model="land.password"
          placeholder="输入密码"
        />
        <button @click="submit">登录</button>
        <div>
          <a href="javascript:;" @click="ChangeRegister">立即注册</a>
        </div>
      </div>
      <register @registerShow="getRegister" v-show="register"></register>
      <img @click="closeLand" src="./../../../static/imgs/close.png" alt="" />
    </div>
  </div>
</template>

<script>
 import Bus from './../../../static/js/bus'
import register from "./../../components/landing/register";
export default {
  name: "landing",
  components: { register },
  data() {
    return {
      land: {
        account: "",
        password: ""
      },
      msg: "",
      landing: true,
      register: false
    };
  },
  methods: {
    getRegister(val) {
      this.register = val;
      this.landing = !val;
    },
    //忘记密码
    ChangeRegister() {
      this.landing = false;
      this.register = true;
    },
    //关闭窗口
    closeLand() {
      $(".land").slideUp("fast");
      this.landing = true;
      this.register = false;
    },
      //存储
      session(token, userId) {
          this.removeStore("accessToken");
          this.removeStore("userId");
          this. setStore("accessToken",token);
          this. setStore("userId", userId)

      },
    //提交登陆
    submit() {
      $(".land input").removeClass("active");
      if (this.land.account == "" || this.land.account.length < 5) {
        this.msg = "账号不规范";
        $("#account").addClass("active");
        $("#account").focus();
        return;
      }
      if (this.land.password == "" || this.land.password.length < 6) {
        this.msg = "密码不规范";
        $("#password").addClass("active");
        $("#password").focus();
        return;
      }
      this.login(this.land).then((res)=>{
          if(res.code==200){
              this.session(res.result.token, res.result.userId);
              this.$Message.success(res.msg);
              this.closeLand();
              this.succ = true;
              Bus.$emit('succ', this.succ);

          }else{
              this.$Message.error(res.msg);
          }
      });
    }
  }
};
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
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
    .landBox {
      width: 290px;
      height: 305px;
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
    }
    & > img {
      position: absolute;
      top: 20px;
      right: 15px;
      width: 15px;
      cursor: pointer;
    }
  }
}
</style>
