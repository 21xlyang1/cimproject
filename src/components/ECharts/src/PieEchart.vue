<template>
  <base-echart id="pie-echart" class="pie-echart" width="200px" height="300px" :option="option" />
</template>
  
<script>
import { vector } from "echarts";
import BaseEchart from "./BaseEchart.vue";

export default {
  components: {
    BaseEchart,
    vector
  },
  data() {
    return {
      option: {
        // title: {
        //   text: "流动人员检测",
        //   textStyle: {
        //     fontSize32,
        //     color: "white",
        //   }
        // },
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
              borderColor: "#ffffff",
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
              { value: 350, name: "Test Ads" }
            ],
          },
        ],
      },
    };
  },
  mounted() {

    this.option = {
      tooltip: {
        trigger: "item",
      },
      //图例的样式
      legend: {
        // orient:'vertical',
        top: "20%",
        left: "center",
        // doesn't perfectly work with our tricks, disable it
        selectedMode: false,
        textStyle: {
              color: "white",
              fontSize:10
            }
      },
      //组件的样式
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
              // return param.name + " (" + param.percent * 2 + "%)";
              return param.name;

            },
            textStyle: {
              color: "white",
              fontSize: 5
            }
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
                color: "black",
                decal: {
                  symbol: "none",
                },
              },
              label: {
                show: true,
              },
            },
          ],
        },
      ],
      itemStyle: {
        emphasis: {
          ShadowBlur: 10,
          ShadowOffsetX: 0,
          // ShadowColor:rgba(0,0,0,0.5)
        },
        normal: {
          label: {
            textStyle: {
              fontSize: 25
            }
          }
        }

      }
    };

  }
}
</script>
<style scoped>
</style>

  