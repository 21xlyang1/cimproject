<template>
  <div
    style="width: 360px; color: rgb(224, 224, 224)"
    class="d-flex justify-content-center"
    @mouseover="over"
    @mouseout="out"
    :style="active ? 'background: rgb(255, 255, 255, 0.2)' : ''"
  >
    <div class="">
      <div class="d-flex justify-content-center w-100">
        {{ id + "号：" + name }}
      </div>
      <div class="mb-2" style="height: 200px; width: 300px;position: relative;">
        <img
          
          style="height: 200px; width: 300px"
          :src="'static/壁纸/壁纸 (' + id + ').jpg'"
          alt=""
        />
        <div v-if="warring" class=" d-flex justify-content-center align-items-center overlayContainer">
          <v-icon name="warring" style="color: rgba(255, 0, 0, 0.4);font-size: 100px;"></v-icon>
        </div>
      </div>

      <div v-if="warring" class="mb-2 d-flex justify-content-evenly">
        <el-button type="warning" size="small">拨号</el-button>
        <el-button type="danger" size="small">报警</el-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cameraWarring",
  props: ["id", "warring", "name"],
  data() {
    return {
      people: 3,
      maxPeople: 32,
      active: false,
    };
  },
  methods: {
    over() {
      this.active = true;
    },
    out() {
      this.active = false;
    },
  },
};
</script>

<style lang="css" scoped>
.overlayContainer {
  position: absolute;
  top: 0px;
  right: 0px;
  background-color: rgba(255, 0, 0, 0.4);
  width: 100%;
  height: 100%;

  z-index: 100;
}
</style>

