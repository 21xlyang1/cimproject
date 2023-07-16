<template>
  <div style="color: #aaa">
    <div class="row" style="margin-top: 40px">
      <div class="col-4">
        <!-- 姓名 -->
        <div class="form-floating">
          <input
            type="email"
            class="form-control rounded-0 input"
            v-model="realname.data"
            placeholder="name@example.com"
          />
          <label>真实姓名</label>
          <div
            class="small"
            :class="realname.state == 1 ? 'text-warning' : 'text-danger'"
            style="height: 16px"
          >
            {{ realname.info }}
          </div>
        </div>
      </div>
      <div class="col-8">
        <!-- 手机号 -->
        <div class="form-floating">
          <input
            type="email"
            class="form-control rounded-0 input"
            v-model="phoneNumber.data"
            placeholder="name@example.com"
          />
          <label>手机号码</label>
          <div
            class="small"
            :class="phoneNumber.state == 1 ? 'text-warning' : 'text-danger'"
            style="height: 16px"
          >
            {{ phoneNumber.info }}
          </div>
        </div>
      </div>
    </div>
    <!-- 用户名 -->
    <div class="form-floating">
      <input
        type="email"
        class="form-control rounded-0 input"
        v-model="username.data"
        placeholder="name@example.com"
      />
      <label>用户名</label>
      <div
        class="small"
        :class="username.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ username.info }}
      </div>
    </div>
    <!-- 密码 -->
    <div class="form-floating">
      <input
        type="password"
        class="form-control rounded-0 input"
        v-model="password.data"
        placeholder="Password"
      />
      <label>密码</label>
      <div
        class="small"
        :class="password.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ password.info }}
      </div>
    </div>
    <!-- 确认密码 -->
    <div class="form-floating">
      <input
        type="password"
        class="form-control rounded-0 input"
        v-model="repassword.data"
        placeholder="Password"
      />
      <label>确认密码</label>
      <div
        class="small"
        :class="repassword.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ repassword.info }}
      </div>
    </div>
    <!-- 激活码 -->
    <div class="form-floating">
      <input
        type="email"
        class="form-control rounded-0 input"
        v-model="activationCode.data"
        placeholder="name@example.com"
      />
      <label>激活码</label>
      <div
        class="small"
        :class="activationCode.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ activationCode.info }}
      </div>
    </div>
    <!-- 同意政策 -->
    <el-checkbox
      size="medium"
      style="color: #aaa"
      class="mt-3"
      v-model="isAgree"
      >阅读并接受《<a
        href="#"
        style="text-decoration: none; color: rgba(219, 101, 116)"
        >CIM管理网站用户协议</a
      >》</el-checkbox
    >
    <!-- 注册按钮 -->
    <div class="row mt-4">
      <div class="col"></div>
      <el-button
        @click="register"
        class="d-flex col justify-content-center"
        style="
          background-color: rgba(219, 101, 116);
          border-color: rgba(219, 101, 116);
          color: aliceblue;
        "
        >注册</el-button
      >
      <div class="col"></div>
    </div>
    <!-- 登入链接 -->
    <div class="d-flex w-100 flex-row-reverse mt-3">
      <router-link
        to="/ls/login"
        style="text-decoration: none; color: rgba(219, 101, 116)"
        >点击登入</router-link
      >
      <div class="">已有账号?</div>
    </div>
  </div>
</template>
<script>
import { get, post } from '@/utils/http';
import axios from 'axios';
export default {
  name: "register",
  data() {
    return {
      isAgree: false,
      realname: { data: "", state: 0, info: "" },//state若为0，则提示为红色，若为1，则提示为黄色
      phoneNumber: {data: "",state: 0,info: ""},
      username: {data: "",state: 0,info: ""},
      password: {data: "",state: 0,info: ""},
      repassword: {data: "",state: 0,info: ""},
      activationCode: {data: "",state: 0,info: ""},
    };
  },
  methods: {
    register() {
      // console.log(this.username, this.password, this.unInfo, this.pwInfo);
      this.realname.info= "";
      this.phoneNumber.info= "";
      this.username.info= "";
      this.password.info= "";
      this.repassword.info= "";
      this.activationCode.info= "";
      var flag = true;
      // 表单验证
      if (this.realname.data == "") {
        this.realname.state = 1;
        this.realname.info = "请输入真实姓名";
        flag = false;
      }

      if (this.phoneNumber.data == "") {
        this.phoneNumber.state = 1;
        this.phoneNumber.info = "请输入手机号码";
        flag = false;
      }else if(this.phoneNumber.data.length!=11){
        this.phoneNumber.state=0;
        this.phoneNumber.info="手机号码的格式不正确"
      }

      if (this.username.data == "") {
        this.username.state = 1;
        this.username.info = "请输入用户名";
        flag = false;
      } else if (
        this.username.data.length < 8 ||
        this.username.data.length > 11
      ) {
        this.username.state = 0;
        this.username.info = "用户名的长度应在8位至11位";
        flag = false;
      }



      if (this.password.data == "") {
        this.password.state = 1;
        this.password.info = "请输入密码";
        flag = false;
      }
      if (this.repassword.data == "") {
        this.repassword.state = 1;
        this.repassword.info = "请再次输入密码";
        flag = false;
      }else if(this.password.data!=this.repassword.data){
        this.repassword.state=0;
        this.repassword.info="两次密码输入不一致"
      }

      if (this.activationCode.data == "") {
        this.activationCode.state = 1;
        this.activationCode.info = "请输入激活码，若没有激活码，请联系我们";
      }

      // if (!flag) return;
      post("/auth/register",{
        username:this.username
      }).then(
        (Response) => {
          console.log("请求成功", Response);
        },
        (error) => {
          console.log("请求失败", error.message);
        }
      );


      console.log("注册成功");
    },
  },
};
</script>

<style lang="css" scoped>
.input {
  color: aliceblue;
  background-color: #2d3035;
  border-top: 0px;
  border-left: 0px;
  border-right: 0px;
}
</style>

