<template>
  <div>
    <div>主要系统</div>
		<myHead></myHead>
		<asideNav></asideNav>
		<router-view name="tow"></router-view>
  </div>
</template>
<script>
import myHead from '@/components/myHead.vue';
import asideNav from '@/components/asideNav.vue';

export default {

  name: "appSystem",
	components:{myHead,asideNav}

};
</script>

<style lang="scss" scoped>
</style>

Asidenav