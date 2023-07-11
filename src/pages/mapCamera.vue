<template>
  <div class="w-100 h-100 d-flex">
    <div class="h-100" style="flex-grow: 1">
      <gaodeMap></gaodeMap>
    </div>
    <div class="h-100" style="width: 200px"></div>
  </div>
</template>
<script>
import gaodeMap from "@/components/gaodeMap.vue";
export default {
  name: "mapCamera",
  components: { gaodeMap },
  mounted() {},
};
</script>

<style lang="scss" scoped>
</style>

