<template>
  <div class=" " style="width: 160px; height: 80px;color: rgb(216, 218, 219);">
    <div class="w-100 d-flex justify-content-center" style=" height:20px;">
      <div>
       {{ title }}
      </div>
    </div>
    <div class="w-100 d-flex justify-content-center align-items-center" style="height: 50px;">
      <div class="  d-flex justify-content-center" style="width: 150px ;height: 50px; background-color: rgba(39, 153, 247, 0.8);">
        <div style="font-size: 33px;">{{ data }}</div>
        <div style="padding-top: 15px;padding-left: 4px;">{{ danwei }}</div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:"dataCard",
    props:["title","data","danwei"],
  }
</script>

<style lang="scss" scoped>

</style>

