<template>
  <div class="w-100 h-100 d-flex">
    <div class="h-100" style="flex-grow: 1">
      <gaodeMap></gaodeMap>
    </div>
    <div class="h-100" style="min-width: 200px; background: rgba(0, 0,0, 0.85)">
      <div class="w-100 d-flex justify-content-center">
        <dataCard danwei="个" title="点位数量" :data="20"></dataCard>
      </div>
      <div class=" mt-4 w-100 d-flex justify-content-center">
        <dataCard danwei="人" title="当前移动人员人数" :data="1250"></dataCard>
      </div>
      <div>
        <PieEchart></PieEchart> 
        <BarEchart></BarEchart>
      </div>
      
    </div>
  </div>
</template>
<script>
import { PieEchart,BarEchart } from "@/components/ECharts";
import gaodeMap from "@/components/gaodeMap.vue";
import dataCard from "@/components/dataCard.vue";
export default {
  name: "mapCamera",
  components: { gaodeMap, dataCard,PieEchart,BarEchart },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>

