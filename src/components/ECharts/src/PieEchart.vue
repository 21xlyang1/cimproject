<template>
    <base-echart
      id="pie-echart"
      class="pie-echart"
      width="400px"
      height="400px"
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
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: "#fff",
                borderWidth: 2,
              },
              label: {
                show: false,
                position: "center",
              },
              emphasis: {
                label: {
                  show: true,
                  fontSize: 40,
                  fontWeight: "bold",
                },
              },
              labelLine: {
                show: false,
              },
              data: [
                { value: 1048, name: "Search Engine" },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 300, name: "Video Ads" },
              ],
            },
          ],
        },
      };
    },
    mounted() {
      setTimeout(() => {
        this.option = {
          tooltip: {
            trigger: "item",
          },
          legend: {
            top: "5%",
            left: "center",
            // doesn't perfectly work with our tricks, disable it
            selectedMode: false,
          },
          series: [
            {
              name: "Access From",
              type: "pie",
              radius: ["40%", "70%"],
              center: ["50%", "70%"],
              // adjust the start angle
              startAngle: 180,
              label: {
                show: true,
                formatter(param) {
                  // correct the percentage
                  return param.name + " (" + param.percent * 2 + "%)";
                },
              },
              data: [
                { value: 1048, name: "Search Engine" },
                { value: 735, name: "Direct" },
                { value: 580, name: "Email" },
                { value: 484, name: "Union Ads" },
                { value: 300, name: "Video Ads" },
                {
                  // make an record to fill the bottom 50%
                  value: 1048 + 735 + 580 + 484 + 300,
                  itemStyle: {
                    // stop the chart from rendering this piece
                    color: "none",
                    decal: {
                      symbol: "none",
                    },
                  },
                  label: {
                    show: false,
                  },
                },
              ],
            },
          ],
        };
      }, 3000);
    },
  };
  </script>
  <style scoped></style>

  