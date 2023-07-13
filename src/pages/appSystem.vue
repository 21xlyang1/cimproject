<template>
  <div class="bgimg w-100"  style=" display: flex;flex-direction: column;background-image: url('./static/bgImg/asbg2.jpg');">
    <div class="" style="min-height: 110px">
      <myHead class="w-100 h-100"></myHead>
    </div>
    <div class="d-flex   " style="flex: 1;" >
      <div class="h-100 " style="min-width: 300px;">
        <asideNav></asideNav>
      </div>
      <div class="h-100 " style="flex-grow: 1;"  > 
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

<style lang="css" scoped>
.bgimg{

  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
}
</style>

