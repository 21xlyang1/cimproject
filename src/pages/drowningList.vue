<template>
  <div class="w-100 h-100 d-flex">
    <div class="h-100" style="flex-grow: 1">
      <gaodeMap></gaodeMap>
    </div>
    <div class="h-100" style="min-width: 400px; background: rgb(0, 0, 0, 0.85)">

    </div>
  </div>
</template>
<script>
import gaodeMap from '@/components/gaodeMap.vue';
  export default {
    name:"drowningList",
    components:{gaodeMap},
  }
</script>

<style lang="scss" scoped>

</style>

