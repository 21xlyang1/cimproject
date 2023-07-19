<template>
  <div class="w-100 h-100 d-flex">
    <div
      class="h-100 ps-4 pe-4"
      style="flex-grow: 1; background: rgb(0, 0, 0, 0.85)"
    >
      <div class="h-100 w-100 d-flex" style="flex-direction: column">
        <div style="flex: 1">
          <div class="w-100 h-100 d-flex">
            <!-- 摄像头 -->
            <div
              class="h-100 d-flex"
              style="
                flex-grow: 1;
                flex-direction: column;
                color: rgb(209, 209, 209);
              "
            >
              <div class="ps-2 w-100 d-flex" style="height: 30px">
                <div>全景图像</div>
                <div class="ps-3">总人数：</div>
                <div
                  class="ps-2"
                  style="color: rgb(255, 0, 0); font-size: 18px"
                >
                  {{ 17 }}
                </div>
                <div class="ps-2">人</div>
                <div class="ps-4">当前画面的人数：</div>
                <div
                  class="ps-2"
                  style="color: rgb(0, 4, 255); font-size: 18px"
                >
                  {{ 5 }}
                </div>
                <div class="ps-2">人</div>
              </div>
              <div
                class="w-100 d-flex justify-content-center"
                ref="containerRef"
                style="flex-grow: 1"
              >
                <div
                  class="bg-black"
                  :style="{ width: calculatedWidth, height: calculatedHeight }"
                ></div>
              </div>
            </div>
            <!-- 信息 -->
            <div class="h-100" style="min-width: 250px;color: rgb(209, 209, 209);">
              <el-scrollbar class="w-100" :style="{height:infHeight}" >
                <div class="w-100 mt-5  d-flex justify-content-center align-items-center" style=" height: 200px;">
                  <img
                  style="height: 190px; width: 170px; background-size: 100% 100%"
                  :src="'static/壁纸/壁纸 (' + 1 + ').jpg'"
                  alt=""
                />
                </div>
                <div class="w-100  d-flex justify-content-center align-items-center " style="height: 300px;">
                  <div class=" border p-3" style="height: 290px;width: 210px;">
                    <div class="mt-2">抓拍时间：</div>
                    <div>{{"2022-9-17 15:38:56"}}</div>
                    <div class="mt-3">抓拍地点：</div>
                    <div>{{"村入口1"}}</div>
                    <div class="mt-3">对象受信任程度：</div>
                    <div>{{ "信任" }}</div>
                    <div class="mt-3"> 对象序号：</div>
                    <div>{{ "0100" }}</div>
                  </div>
                </div>
              </el-scrollbar>
            </div>
          </div>
        </div>
        <!-- 图片抓取 -->
        <div class="w-100" style="height: 200px; color: rgb(209, 209, 209)">
          <div class="ps-4" style="height: 30px; font-size: 19px">
            抓拍人脸：序列号
          </div>
          <div class="row" style="height: 170px">
            <div v-for="index in 7" :key="index" class="col">
              <div class="h-100">
                <img
                  style="height: 136px; width: 100%; background-size: 100% 100%"
                  :src="'static/壁纸/壁纸 (' + index + ').jpg'"
                  alt=""
                />
                <div
                  class="w-100 d-flex justify-content-center align-items-center"
                  style="height: 30px"
                >
                  {{ index.toString().padStart(4, "0") }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="h-100"
      style="
        min-width: 300px;
        background: rgb(0, 0, 0, 0.85);
        color: rgb(209, 209, 209);
      "
    >
      <el-scrollbar class="w-100" :style="{ height: outerDivHeight }">
        <div
          class="d-flex align-items-center justify-content-between"
          style="height: 40px"
        >
          <div class="ms-4">序列号</div>
          <div class="pe-3">审核状态</div>
          <div style="margin-right: 44px">操作</div>
        </div>
        <peopleItem
          v-for="index in 20"
          :state="index % 2 == 1"
          :key="index"
          :id="index.toString().padStart(4, '0')"
        ></peopleItem>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import peopleItem from "@/components/peopleItem.vue";
export default {
  name: "oursiderList",
  components: { peopleItem },
  data() {
    return {
      calculatedWidth: "0px",
      calculatedHeight: "0px",
      outerDivHeight: "",
      infHeight:"",
    };
  },
  methods: {
    setOuterDivSize() {
      
      this.outerDivHeight = window.innerHeight - 110 + "px";
    },
    setInfHeight(){
      let t=window.innerHeight>700?window.innerHeight:700
      this.infHeight = t - 310 + "px";
    },
    calculateSize() {
      const container = this.$refs.containerRef;
      const containerWidth = container.offsetWidth;
      const containerHeight = container.offsetHeight;

      const targetRatio = 3 / 2;
      let calculatedWidth, calculatedHeight;

      if (containerWidth / containerHeight > targetRatio) {
        calculatedHeight = `${containerHeight}px`;
        calculatedWidth = `${containerHeight * targetRatio}px`;
      } else {
        calculatedWidth = `${containerWidth}px`;
        calculatedHeight = `${containerWidth / targetRatio}px`;
      }

      this.calculatedWidth = calculatedWidth;
      this.calculatedHeight = calculatedHeight;
    },
  },
  mounted() {
    this.setOuterDivSize(); // 初始化时设置最外层div的尺寸
    this.setInfHeight();
    setTimeout(() => {
      this.calculateSize();
    }, 1);

    // 监听窗口大小改变事件，在窗口大小改变时更新最外层div的尺寸
    window.addEventListener("resize", this.setOuterDivSize);
    window.addEventListener("resize", this.setInfHeight);
    window.addEventListener("resize", this.calculateSize);
  },
  beforeDestroy() {
    // 组件销毁时，移除窗口大小改变事件的监听
    window.removeEventListener("resize", this.setOuterDivSize);
    window.removeEventListener("resize", this.setInfHeight);
    window.removeEventListener("resize", this.calculateSize);
    
    
  },
};
</script>

<style lang="css" scoped>
.custom-scrollbar {
  /* overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap; Prevent content from wrapping to the next line */
}
</style>

