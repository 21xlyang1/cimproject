import { debounce } from "./debounce.js";

export default {
  data() {
    return {
      $_resizeHandler: null,
    };
  },
  mounted() {
    this.initListener();
  },
  activated() {
    if (!this.$_resizeHandler) {
      // 避免重复初始化
      this.initListener();
    }

    // 激活保活图表时，自动调整大小
    this.resize();
  },
  beforeDestroy() {
    this.destroyListener();
  },
  deactivated() {
    this.destroyListener();
  },
  methods: {
    // 使用 $_ 作为一个私有 property 的约定，以确保不会和 Vue 自身相冲突。
    // 详情参见 vue 风格指南 https://vuejs.org/v2/style-guide/index.html#Private-property-names-essential

    initListener() {
      this.$_resizeHandler = debounce(() => {
        this.resize();
      }, 100);
      window.addEventListener("resize", this.$_resizeHandler);
    },
    destroyListener() {
      window.removeEventListener("resize", this.$_resizeHandler);
      this.$_resizeHandler = null;
    },
    resize() {
      const { chart } = this;
      chart && chart.resize();
    },
  },
};
