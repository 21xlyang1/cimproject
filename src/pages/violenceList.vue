<template>
  <div class="w-100 h-100 d-flex">
    <div class="h-100" style="flex-grow: 1">
      <gaodeMap></gaodeMap>
    </div>
    <div class="h-100" style="min-width: 360px; background: rgb(0, 0, 0, 0.85)">
      <el-scrollbar :style="{ height: outerDivHeight }">
        <cameraWarring v-for="index in 3" :key="index" :warring="index==1" :id="index" :name="'陇头工业区二区4号'"></cameraWarring>

      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import gaodeMap from '@/components/gaodeMap.vue';
import cameraWarring from '@/components/cameraWarring.vue';
  export default {
    name:"violenceList",
    components:{gaodeMap,cameraWarring},
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
  }
</script>

<style lang="scss" scoped>

</style>

