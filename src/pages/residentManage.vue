<template>
  <div class="w-50 h-100 d-flex">
    <div
      class="h-80 ps-4 pe-4"
      style="flex-grow: 1; background: rgb(0, 0, 0, 0.85)"
    >
      <!-- <adminArtChe></adminArtChe> -->
      <el-scrollbar :style="{ height: outerDivHeight }">
        <residentTable></residentTable>
      </el-scrollbar>
    </div>
    <div class="h-100" style="min-width: 200px; background: rgb(0, 0, 0, 0.85)">
      <div class="w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当前常驻人员" :data="3454"></dataCard>
      </div>
      <div class=" mt-4 w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当日新增常驻人数" :data="16"></dataCard>
      </div>
      <div>
        <CLweek/>
        <CZrelichart/>
      </div>
    </div>
  </div>
</template>
<script>
import CLweek from "@/components/ECharts/src/CLweek.vue";
import dataCard from "@/components/dataCard.vue";
import adminArtChe from "@/components/adminArtChe.vue";
import residentTable from "@/components/residentTable.vue";
import CZrelichart from "@/components/ECharts/src/CZrelichart.vue";
export default {
  name: "residentManage",
  components: { CZrelichart,dataCard, adminArtChe, residentTable,CLweek },
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

<!-- 修改分页背景色 -->
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  /* background-color: #c44a25; */
  color: #ffffff;
}
.el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: #2d3035;
  color: #b1b1b1;
}
</style>
