<template>
  <div style="color: #aaa">
    <div class="" style="margin-top: 120px">
      <!-- 用户名 -->

      <FloatingLabel :label="'用户名'" v-model="username.data"></FloatingLabel>
      <div
        class="small"
        :class="username.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ username.info }}
      </div>
      <!-- 密码 -->
      <FloatingLabel :type="'password'" :label="'密码'" v-model="password.data"></FloatingLabel>
      <div
        class="small"
        :class="password.state == 1 ? 'text-warning' : 'text-danger'"
        style="height: 16px"
      >
        {{ password.info }}
      </div>

      <!--自动登入 -->
      <el-checkbox
        size="medium"
        style="color: #aaa"
        class="mt-3"
        v-model="isSave"
        >自动登入</el-checkbox
      >
      <!-- 登入按钮 -->
      <div class="row mt-4">
        <div class="col"></div>
        <el-button
          @click="login"
          class="d-flex col justify-content-center"
          style="
            background-color: rgba(219, 101, 116);
            border-color: rgba(219, 101, 116);
            color: aliceblue;
          "
          >登入</el-button
        >
        <div class="col"></div>
      </div>

      <!-- 注册跳转 -->
      <div class="d-flex w-100 flex-row-reverse mt-3">
        <router-link to="/ls/register" style="color: rgba(219, 101, 116)"
          >未有账号？点击注册</router-link
        >
      </div>
    </div>
    <div class="row">
      <div class="col-3"></div>
    </div>
  </div>
</template>
<script>
import { get,post } from "@/utils/http";
import FloatingLabel from "@/components/FloatingLabel.vue";
import router from '@/router';
export default {
  name: "login",
  data() {
    return {
      isSave: false,
      username: { data: "", state: 0, info: "" },
      password: { data: "", state: 0, info: "" },
    };
  },
  components: { FloatingLabel },
  methods: {
    login() {
      this.username.info = "";
      this.password.info = "";
      var flag = true;
      if (this.username.data == "") {
        this.username.state = 1;
        this.username.info = "请输入用户名";
        flag = false;
      }
      if (this.password.data == "") {
        this.password.state = 1;
        this.password.info = "请输入密码";
        flag = false;
      }

      if (!flag) return;

      // post("/auth/login", {
      //   username: this.username.data,
      //   password: this.password.data,

      // }).then(
      //   (Response) => {
      //     console.log("请求成功", Response);
      //   },
      //   (error) => {
      //     console.log("请求失败", error.message);
      //   }
      // );
      this.$cookies.set("isLog",true)
      this.$router.push("/")
      this.$message({
        message: "欢迎登入",
        type: "success",
      });
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

