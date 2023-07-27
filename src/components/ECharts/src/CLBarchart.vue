<template>
  <!-- 环形饼状图 -->
  <base-echart id="circular-echart" class="circular-echart" width="200px" height="200px" :option="option" />
</template>
  
<script>
import { BIconTextCenter } from "bootstrap-vue";
import BaseEchart from "./BaseEchart.vue";

export default {
  components: {
    BaseEchart,
  },
  data() {
    return {
      option: {
        textStyle: {
          color: "#fff",
        },
        title: {
          text: '流动人数占比',
          left: 'center',
          top: 0,
          textStyle: {
            color: '#ccc'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          data: [
            '村口1',
            '村口2',
            '村口3',
            '村口4',
          ],
          orient: 'horizontal',
          //x:'left',      //可设定图例在左、右、居中
          //y:'center',     //可设定图例在上、下、居中
          padding: [
            30,  // 上
            0, // 右
            0,  // 下
            0, // 左
          ],
          textStyle: {
            color: "#fff",
          },

        },
        series: [
          {
            name: '数据：',
            type: 'pie',
            selectedMode: 'single',
            center: ['50%', '70%'],
            radius: [0, '30%'],
            label: {
              position: 'inner',
              fontSize: 8,

            },

            labelLine: {
              show: false
            },
            data: [
              { value: 1548, name: '公共场所' },
              { value: 775, name: '村口' },
              { value: 679, name: '居民区', selected: true }
            ]
          },
          {
            name: '数据：',
            type: 'pie',
            radius: ['45%', '60%'],
            center: ['50%', '70%'],
            label: {
              show: false,
              position: 'center'
            },
            data: [
              { value: 1048, name: '村口1' },
              { value: 335, name: '村口2' },
              { value: 310, name: '村口3' },
              { value: 251, name: '村口4' },

            ]
          }
        ]
      }
    }
  },

};
</script>
  
<style scoped></style>
  