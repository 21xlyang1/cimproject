<template>
  <div
    class="w-100 h-100 d-flex"
    style="background-color: rgba(0, 0, 0, 0.85); color: rgb(179, 186, 192)"
  >
    <div class="h-100" style="flex-grow: 1">
      <div class="w-100 h-100 d-flex justify-content-center" ref="containerRef" :style="{ maxHeight: outerDivHeight }">
        <div class=" bg-black" :style="{ width: calculatedWidth, height: calculatedHeight }">
          摄像头编号：{{ cameraId }}
        </div>
      </div>
    </div>
    <div class="h-100" style="min-width: 240px">
      <el-scrollbar :style="{ height: outerDivHeight }">
        <cameraItem v-for="item,index in cameralist" :key="index" :id="item.ID" :name="item.name" >{{ index }}</cameraItem>
      </el-scrollbar>
    </div>
  </div>
</template>
<script>
import cameraItem from '@/components/cameraItem.vue';
export default {
  name: "cameraShow",
  components: { cameraItem },
  data() {
    return {
      outerDivHeight: "",
      calculatedWidth: '',
      calculatedHeight: '',
      cameraId:0,
      cameralist:[
        {ID:1,name:"护堤路210号申通"},
        {ID:2,name:"护堤水利交界_川香阁"},
        {ID:3,name:"陇北三巷1号"},
        {ID:4,name:"陇北十一巷1号1枪"},
        {ID:5,name:"陇北十一巷1号2枪"},
        {ID:6,name:"陇东六巷1号"},
        {ID:7,name:"陇东一巷一号1枪"},
        {ID:8,name:"陇东一巷一号1枪2"},
        {ID:9,name:"陇头工业区1号1枪"},
        {ID:10,name:"陇头工业区1号2枪"},
      ]
    };
  },
  // computed: {
  //   calculatedHeight() {
  //     return `${Math.min(this.width / this.ratio, this.height)}px`;
  //   }
  // },
  methods: {
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
    setOuterDivSize() {
      this.outerDivHeight = window.innerHeight - 110 + "px";
      this.calculateSize()
    },
  },
  mounted() {

    this.cameraId=this.$route.query.id==undefined?1:this.$route.query.id

    this.setOuterDivSize(); // 初始化时设置最外层div的尺寸

    this.calculateSize()
    window.addEventListener('resize', this.calculateSize);
    // 监听窗口大小改变事件，在窗口大小改变时更新最外层div的尺寸
    window.addEventListener("resize", this.setOuterDivSize);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.calculateSize);
    // 组件销毁时，移除窗口大小改变事件的监听
    window.removeEventListener("resize", this.setOuterDivSize);
  },
  watch:{
    '$route':{
      immediate:true,
      handler(to){
        this.cameraId=this.$route.query.id==undefined?1:this.$route.query.id
      }
    }
  }

};
</script>

<style lang="css" scoped>
.container {
  position: relative;
  /* width: 100%; */
  padding-top: 66.66%; /* 高度为宽度的 66.66%（2/3） */
}
</style>

