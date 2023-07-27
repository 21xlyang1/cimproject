<template>
  <base-echart id="line-echart" 
  class="line-echart" 
  width="300px" 
  height="190px" 
  :option="option" />
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
        title: {
          text: '流动人口趋势（今日）',
          textStyle: {
            color: '#ccc'
          }
        },

        textStyle: {
          color: '#fff'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross',
            label: {
              backgroundColor: '#6a7985'
            }
          }
        },
        legend: {
          left:0,
          itemGap:0,
          data: ['村口', '公共场所', '居民区'],
          textStyle: {
            color: '#fff'
          },
        
          padding:[
            30,
            0,
            0,
            0
          ],
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: '0%',
          right: '4%',
          bottom: '3%',
          // top:'0%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            boundaryGap: false,
            data: ['0', '5', '10', '15', '20', '22', '24']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          { 
            name: '村口',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
          },
          {
            name: '公共场所',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
          },

          {
            name: '居民区',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
              focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
          },

        ]
      }
    };
  },
};
</script>
  
<style scoped>
.line-echart{
  margin-top: 10px;
}</style>
  