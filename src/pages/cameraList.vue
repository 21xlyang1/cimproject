<template>
  <div class="w-100 h-100 d-flex">
    <div class="h-100 " style="flex-grow: 1; background-color: rgba(0, 0, 0, 0.85);" >
      <el-scrollbar :style="{ height: outerDivHeight }">
        <div
          class=" d-flex align-content-start flex-wrap clearfix"
          style="width: 100%"
          :style="{ height: outerDivHeight }"
        >
          <div v-for="index in 20" :key="index" class=" p-0 m-0">
            <cameraCard :id="index"></cameraCard>
          </div>
        </div>
      </el-scrollbar>
    </div>
    <div class="h-100" style="min-width: 200px; background: rgb(0, 0, 0, 0.85)">
      <div class="w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当前移动人员总数" :data="1250"></dataCard>
      </div>
      <div class=" mt-4 w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当日最高人流量" :data="1600"></dataCard>
      </div>
    </div>
  </div>
</template>
<script>
import cameraCard from "@/components/cameraCard.vue";
import dataCard from "@/components/dataCard.vue";
export default {
  name: "cameraList",
  components: { cameraCard,dataCard },
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
</style>

