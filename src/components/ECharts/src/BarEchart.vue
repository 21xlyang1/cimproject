<template>
  <base-echart id="bar-echart" 
  class="bar-echart" 
  width="200px" 
  height="200px" :option="option" />
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
        backgroundColor: '#000',
        // center:["0%","100%"],
        title: {
          text: '流动人数趋势',
          left: 'center',
          top: 0,
          textStyle: {
            color: '#ccc'
          }
        },
        grid:{
          left:"15%",
        },
        legend: {
          left:0,
          textStyle: {
            color: '#fff'
          },
          itemHeight:5,
          itemGap: 0,
          padding: [
            30,  // 上
            0, // 右
            0,  // 下
            0, // 左
          ]
        },
        tooltip: {},
        dataset: {
          source: [
            ['product', '公共场所', '村出入口', '村居民地'],
            ['2022-3', 43.3, 85.8, 93.7],
            ['2022-4', 83.1, 73.4, 55.1],
            ['2022-5', 86.4, 65.2, 82.5],
            ['2022-6', 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          axisLabel: {
            color: '#fff'
          },
          type: 'category'
        },
        yAxis: {
          axisLabel: {
            color: '#fff'
          },
        },
        series: [{ type: 'bar' }, { type: 'bar' }, { type: 'bar' }]
      }
    }
    
  },
};
</script>
  
<style scoped></style>
  