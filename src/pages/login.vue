<template>
  <div style="color: #aaa">
    <div class="" style="margin-top: 120px">
      <div class="form-floating mb-4">
        <input
          type="email"
          class="form-control rounded-0 "
          style="background-color:#2d3035;border-top: 0px;border-left: 0px;border-right: 0px;"
          id="floatingInput"
          placeholder="name@example.com"
        />
        <label for="floatingInput">用户名</label>
      </div>
      <div class="form-floating">
        <input
          type="password"
          class="form-control rounded-0"
          style="background-color:#2d3035;border-top: 0px;border-left: 0px;border-right: 0px;"
          id="floatingPassword"
          placeholder="Password"
        />
        <label for="floatingPassword">密码</label>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
};
</script>

<style lang="scss" scoped>
</style>

