<template>
  <div>
    <router-link to="/as/cameraShow" class="" style="height: 220px; width: 220px">
      <div
        @mouseover="over"
        @mouseout="out"
        :style="active ? 'background: rgb(255, 255, 255, 0.2)' : ''"
      >
        <img
          style="height: 110px; width: 200px; margin: 10px 10px 10px 10px"
          :src="'static/壁纸/壁纸 (' + id + ').jpg'"
          alt=""
        />
        <div class="ps-4" style="padding: 2px">点位名称：{{ name }}</div>
        <div class="ps-4" style="padding: 2px">当前人流量：{{ people }}</div>
        <div class="ps-4" style="padding: 2px">
          当日最高人流量：{{ maxPeople }}
        </div>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "cameraCard",
  props: ["id"],
  data() {
    return {
      name: "",
      people: 3,
      maxPeople: 32,
      active: false,
    };
  },
  methods: {
    over() {
      this.active = true;
    },
    out() {
      this.active = false;
    },
  },
};
</script>

<style lang="css" scoped>
/*包含以下四种的链接*/
a {
  color: rgb(190, 197, 204);
  font-size: small;
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
  /* color: rgb(218, 100, 91); */
  text-decoration: none;
}
/* 正在点击的链接*/
a:active {
  text-decoration: none;
}
</style>

