<template>
  <div>
    <router-link
      aria-current="page"
      class="row m-0"
      style="width: 100%; height: 65px"
      :to="to"
      :style="active ? 'background: rgb(255, 255, 255,0.2);' : ''"
    >
      <div class="col-3 ps-4 align-items-center d-flex border-right border-5">
        <v-icon
          :name="icon"
          style="font-size: 26px;"
          :style="active ? 'color: rgba(219, 101, 116);' : ''"
        ></v-icon>
      </div>
      <div class="col-6 p-0 align-items-center d-flex">
        <div
          class="me-3"
          style="
            height: 24px;
            border-style: solid;
            border-width: 1px;
            border-color: rgb(170, 170, 170);
          "
        ></div>
        <div :style="active ? 'color: rgba(219, 101, 116);' : ''">{{ itemName }}</div>
      </div>
      <div class="col-2 align-items-center d-flex"></div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "asideNavItem",
  props: ["itemName", "to", "src", "icon"],
  data() {
    return {
      active: false,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler: function (val, oldVal) {
        // console.log(this.to);
        if (val.path == "/")
          this.active = this.to == '/as/mapCamera';
        else
          this.active = this.to == val.path;
      },
      // 深度观察监听
      deep: true,
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
  color: rgb(148, 146, 146);
  text-decoration: none;
}
/*已经访问过的链接*/
a:visited {
  text-decoration: none;
}
/*鼠标划过(停留)的链接*/
a:hover {
  text-decoration: none;
  background: rgb(255, 255, 255,0.2);
  color: #ffffff;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>