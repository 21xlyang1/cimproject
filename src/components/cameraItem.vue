<template>
  <router-link
    :to="'/as/cameraShow?id=' + id"
    class="w-100 d-flex"
    style="height: 50px"
  >
    <div
      class="w-100 h-100 d-flex align-items-center"
      
      :style="active ? 'background: rgba(219, 101, 116); color: #ffffff;' : ''"
    >
      <v-icon class="ps-2" style="font-size: 36px" :name="active?'bofang':'zanting'"></v-icon>
      <div class="ps-2" style="font-size: 18px">{{ name }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: "cameraItem",
  props: ["name", "id"],
  data() {
    return {
      active: false,
    };
  },
  methods: {},
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        console.log(to);
        this.active = to.query.id == this.id;
        if (this.id == 1 && to.query.id == undefined) this.active = true;
      },
    },
  },
};
</script>

<style lang="css" scoped>
/*包含以下四种的链接*/
a {
  color: rgb(148, 146, 146);

  text-decoration: none;
}
/*正常的未被访问过的链接*/
a:link {
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  background: rgb(255, 255, 255, 0.2);
  color: #ffffff;
  /* color: rgb(218, 100, 91); */
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>

