<template>
  <div
    class="w-100 h-100 changcolor d-flex justify-content-between align-items-center"
    style="color: rgb(204, 207, 209)"
  >
    <!-- 商标 -->
    <div class="ps-4 d-flex align-items-center">
      <img src="static\图标\图标1.png" style="height: 75px; width: 100px" />

      <div
        class=" "
        style="
          height: 65px;
          width: 290px;
          font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
            'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
        "
      >
        <div
          class="d-flex justify-content-evenly w-100"
          style="font-size: 22px"
        >
          <div>智</div>
          <div>慧</div>
          <div>管</div>
          <div>理</div>
          <div>系</div>
          <div>统</div>
        </div>
        <div class="ms-4" style="">
          {{ "Intelligent Management System" }}
        </div>
      </div>
    </div>
    <!-- 个人信息 -->
    <div></div>
    <div class="p-3 d-flex align-items-center">
      <div>行人轨迹孪生系统</div>
      <div class="m-2">|</div>
      <div>{{ currentDate }}</div>
      <div class="m-2"></div>
      <div>{{ currentTime }}</div>
      <div class="m-1"></div>
      <div>{{ currentDay }}</div>
      <div class="m-2">|</div>
      <div>您好，系统管理员</div>
      <div class="m-2">|</div>
      <div style="color: rgba(219, 101, 116);">个人</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myHead",
  data() {
    return {
      name: "fsadf",
      currentTime: "",
      currentDay: "",
      currentDate: "",
    };
  },
  created() {
    setInterval(() => {
      const now = new Date();
      this.currentTime = now.toLocaleTimeString();
      this.currentDay = now.toLocaleDateString(undefined, { weekday: "long" });
      this.currentDate = now.toLocaleDateString();
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
</script>

<style lang="css" scoped>
.changcolor {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 1),
    rgba(0, 0, 0, 0.85)
  );
}
</style>

