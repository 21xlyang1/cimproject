<template>
  <div
    class="h-100 img-fluid"
    style="background-image: url('./static/bgImg/lsbg1.jpeg')"
  >
    <div class="container h-100 p-0" style="min-width: 1100px">
      <div class="w-100 p-5" style="height: 1000px">
        <div
          class="rounded-3 row w-100 shadow-lg"
          style="height: 700px; margin-top: 80px"
        >
          <div
            class="col rounded-start-3 p-5"
            style="background-color: rgba(219, 101, 116, 0.95)"
          >
            <div style="color: aliceblue">登入公告</div>
          </div>
          <div class="col rounded-end-3 p-5" style="background-color: #2d3035">
            <router-view name="tow"></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "loginSystem",
};
</script>

<style lang="scss" scoped>
</style>

