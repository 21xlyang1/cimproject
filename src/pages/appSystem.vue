<template>
  <div class="w-100 h-100">
    <div class="w-100" style="height: 110px">
      <myHead class="w-100 h-100"></myHead>
    </div>
    <div class="d-flex w-100 " style="height: 1000px;">
      <div class="h-100 bg-danger" style="width: 300px;">
        <asideNav></asideNav>
      </div>
      <div class="h-100 bg-black" style="flex-grow: 1;"  > 
        <router-view name="tow"></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import myHead from "@/components/myHead.vue";
import asideNav from "@/components/asideNav.vue";

export default {
  name: "appSystem",
  components: { myHead, asideNav },
};
</script>

<style lang="scss" scoped>
</style>

