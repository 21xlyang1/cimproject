<template>
    <base-echart
      id="bar-echart"
      class="bar-echart"
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
              data: [120, 200, 150, 80, 70, 110, 130],
              type: "bar",
              showBackground: true,
              backgroundStyle: {
                color: "rgba(180, 180, 180, 0.2)",
              },
            },
          ],
        },
      };
    },
    mounted() {
      setTimeout(() => {
        this.option = {
          title: {
            text: "World Population",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow",
            },
          },
          legend: {},
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: {
            type: "value",
            boundaryGap: [0, 0.01],
          },
          yAxis: {
            type: "category",
            data: ["Brazil", "Indonesia", "USA", "India", "China", "World"],
          },
          series: [
            {
              name: "2011",
              type: "bar",
              data: [18203, 23489, 29034, 104970, 131744, 630230],
            },
            {
              name: "2012",
              type: "bar",
              data: [19325, 23438, 31000, 121594, 134141, 681807],
            },
          ],
        };
      }, 3000);
    },
  };
  </script>
  
  <style scoped></style>
  