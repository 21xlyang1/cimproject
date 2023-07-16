<template>
    <base-echart
      id="line-echart"
      class="line-echart"
      width="400px"
      height="200px"
      :option="option"
    />
  </template>
  
  <script>
  import BaseEchart from "./BaseEchart.vue";
  
  export default {
    components: {
      BaseEchart,
    },
    data() {
      return {
        option: {
          xAxis: {
            type: "category",
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [150, 230, 224, 218, 135, 147, 260],
              type: "line",
            },
          ],
        },
      };
    },
    mounted() {
      setTimeout(() => {
        this.option = {
          xAxis: {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
          yAxis: {
            type: "value",
          },
          series: [
            {
              data: [820, 932, 901, 934, 1290, 1330, 1320],
              type: "line",
              areaStyle: {},
            },
          ],
        };
      }, 3000);
    },
  };
  </script>
  
  <style scoped></style>
  