<template>
  <div class="h-100"  style=" background: rgba(0, 0, 0, 0.85);">
		<div class="w-100  p-3" style="height: 50px;">
			<div class="  " style=" font-size: 18px;color: rgb(174, 180, 184);"> 
				Main
			</div>
		</div>
    <asideNavItem itemName="地图总览" to="/as/mapCamera" icon="mapCamera" ></asideNavItem>
    <asideNavItem itemName="摄像头列表" to="/as/cameraList" icon="cameraList"></asideNavItem>
    <asideNavItem itemName="摄像头实况" to="/as/cameraShow" icon="cameraShow"></asideNavItem>
		<asideNavItem itemName="暴力行为检测" to="/as/violenceList" icon="violenceList"></asideNavItem>
		<asideNavItem itemName="溺水行为检测" to="/as/drowningList" icon="drowningList"></asideNavItem>
		<asideNavItem itemName="外来人员检测" to="/as/oursiderList" icon="oursiderList"></asideNavItem>
		<asideNavItem itemName="常驻人员管理" to="/as/residentManage" icon="residentManage"></asideNavItem>
		<asideNavItem itemName="数据统计" to="/as/dataStatistics" icon="dataStatistic"></asideNavItem>

    <!-- <accordion itemName="文章管理" :itemid="'Article'">
      <asideNavItem
        itemName="文章列表"
        to="/admin/article/check"
      ></asideNavItem>
      <asideNavItem itemName="添加文章" to="/admin/article/add"></asideNavItem>
    </accordion>
    <accordion itemName="专栏管理" :itemid="'Column'">
      <asideNavItem itemName="专栏列表" to="/admin/column/check"></asideNavItem>
      <asideNavItem itemName="添加文章" to="/admin/column/check"></asideNavItem>
    </accordion>
    <asideNavItem itemName="文章分类" to="/admin/type"></asideNavItem>
    <asideNavItem itemName="文章标签" to="/admin/label"></asideNavItem> -->
  </div>
</template>
<script>
import accordion from "./accordion.vue";
import asideNavItem from "./asideNavItem.vue";
export default {
  name: "asideNav",
  components: { accordion, asideNavItem },
	mounted() {
    // 在组件加载完成后立即执行一次watch逻辑

  },
	watch: {
    // '$route'(to, from) {
    //   // 在路由变化时执行的逻辑
    //   console.log('路由发生变化');
    //   console.log('当前路由：', to);
    //   console.log('上一个路由：', from);
      
    //   // 执行其他操作...
    // }
  }
};
</script>

<style lang="scss" scoped>
</style>

