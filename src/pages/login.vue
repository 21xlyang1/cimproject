<template>
  <div style="color: #aaa">
    <div class="" style="margin-top: 120px">
      <!-- 用户名 -->
      <div class="form-floating">
        <input
          type="email"
          class="form-control rounded-0"
          style="
          color: aliceblue;
            background-color: #2d3035;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
          "
          v-model="username"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">用户名</label>
        <div class=" text-danger small" style="height: 14px;">{{ unInfo }}</div>
      </div>
      
      <!-- 密码 -->
      <div class="form-floating mt-3">
        <input
          type="password"
          class="form-control rounded-0"
          
          style="
          color: aliceblue;
            background-color: #2d3035;
            border-top: 0px;
            border-left: 0px;
            border-right: 0px;
          "
          v-model="password"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">密码</label>
        <div class=" text-danger small" style="height: 14px;">{{ pwInfo }}</div>
      </div>
      <!--自动登入 -->
      <el-checkbox size="medium"  style="color: #aaa;" class="mt-3" v-model="isSave">自动登入</el-checkbox>
      <!-- 登入按钮 -->
      <el-button  @click="login" class=" d-flex mt-4 " style="background-color: rgba(219, 101, 116);border-color:rgba(219, 101, 116) ;color: aliceblue;">登入</el-button>
      <!-- 注册跳转 -->
      <div class="d-flex w-100 flex-row-reverse mt-3">
        <router-link to="/ls/register" style="color: rgba(219, 101, 116);">未有账号？点击注册</router-link>
      </div>
      
    </div>
  </div>
</template>
<script>
import { get } from '@/utils/http';
export default {
  name: "login",
  data(){
    return{
      isSave:false,
      username:"",
      password:"",
      unInfo:"",
      pwInfo:"",
    }
  },
  methods:{
    login(){
      console.log(this.username,this.password,this.unInfo,this.pwInfo)
      this.unInfo=''
      this.pwInfo=''
      var flag=true
      // 表单验证
      if(this.username==''){
        this.unInfo='用户名不能为空'
        flag=false
      }
      if(this.password==''){
        this.pwInfo='密码不能为空'
        flag=false
      }
      if(!flag)
        return
      get("/login",{
        Username:this.username,
        Password:this.password,
      }).then(
        (Response)=>{
          console.log("请求成功", Response);
        },
        (error)=>{
          console.log("请求失败", error.message);
        }
      )
    }
  }
};
</script>

<style lang="scss" scoped>
</style>

