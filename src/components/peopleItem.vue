<template>
  <div
    class="w-100 d-flex align-items-center justify-content-evenly"
    style="height: 58px"
    @mouseover="active=true"
    @mouseleave="active=false"
    :style="active?'background: rgb(255, 255, 255,0.2);':''"
  >
    <div style="">
      {{ id }}
    </div>
    <div
      class="justify-content-center d-flex align-items-center ps-2 pe-2"
      :style="
        'background: ' +
        (state ? 'rgb(40, 151, 36,0.7)' : 'rgb(211, 214, 25,0.7)')
      "
      style="height: 40px"
    >
      {{ state ? "审核有效" : "审核无效" }}
    </div>

    <el-button size="mini" type="danger">审核</el-button>
  </div>
</template>
<script>
export default {
  name: "peopleItem",
  props: ["id", "state"],
  data(){
    return{
      active:false,
    }
  }
};
</script>

<style lang="css" scoped>
.eer {
  background: rgb(211, 214, 25);
}
</style>

