<template>
  <base-echart id="pie-echart" class="pie-echart" width="200px" height="200px" :option="option" />
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
        backgroundColor: '#000',
        title: {
          text: '流动人数占比',
          left: 'center',
          top: 20,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item'
        },
        visualMap: {
          show: false,
          min: 80,
          max: 600,
          inRange: {
            colorLightness: [0, 1]
          }
        },
        series: [
          {
            name: '流动人数',
            type: 'pie',
            radius: '70%',
            center: ['50%', '60%'],
            data: [
              { value: 335, name: '公共场所1' },
              { value: 310, name: '公共场所2' },
              { value: 274, name: '村出入口1' },
              { value: 235, name: '村出入口2' },
              { value: 400, name: '村居民区1' },
              { value: 450, name: '村居民区2' }
            ].sort(function (a, b) {
              return a.value - b.value;
            }),
            roseType: 'radius',
            // label: {
            //   color: 'rgba(255, 255, 255, 0.3)'
            // },
            // labelLine: {
            //   lineStyle: {
            //     color: 'rgba(255, 255, 255, 0.3)'
            //   },
            //   smooth: 0.2,
            //   length: 10,
            //   length2: 20
            // },
            label: {
              show: false,
              position: 'center'
            },
            itemStyle: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            },
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
              return Math.random() * 200;
            }
          }
        ]
      }
    };
  },
}
</script>
<style scoped></style>

  