<template>
  <div id ="app">
    统计数据页面
  </div>
  <!-- <div class="w-100 h-100 d-flex">
    <div class="h-100 " style="flex-grow: 1; background-color: rgba(250, 250, 250, 0.85);">
      <el-scrollbar :style="{ height: outerDivHeight }">
        <div class=" d-flex align-content-start flex-wrap clearfix" style="width: 100%"
          :style="{ height: outerDivHeight }">
          <div id="app">
            统计数据页面
            <line-echart />
            <pie-echart />
            <bar-echart />
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="h-100" style="min-width: 200px; background: rgba(249, 246, 246, 0.85)">
      <div class="w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当前移动人员总数" :data="1250"></dataCard>
      <div class=" mt-4 w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当日最高人流量" :data="1600"></dataCard>
      </div>
    </div>
  </div> -->
</template>
<script>
import { LineEchart, PieEchart, BarEchart,Circularchart } from "../components/ECharts";
import cameraCard from "../components/cameraCard.vue";
import dataCard from "../components/dataCard.vue";
export default {
  components: {

 
  },
  name: "cameraList",
  data() {
    return {
      outerDivHeight: "",
    };
  },
  mounted() {
    this.setOuterDivSize(); // 初始化时设置最外层div的尺寸

    // 监听窗口大小改变事件，在窗口大小改变时更新最外层div的尺寸
    window.addEventListener("resize", this.setOuterDivSize);
  },
  beforeDestroy() {
    // 组件销毁时，移除窗口大小改变事件的监听
    window.removeEventListener("resize", this.setOuterDivSize);
  },
  methods: {
    setOuterDivSize() {
      this.outerDivHeight = window.innerHeight - 110 + "px";
    },
  },
};
</script>

<style lang="css" scoped>
#app {
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(11, 11, 11);
}
</style>

