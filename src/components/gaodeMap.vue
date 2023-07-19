<template>
  <div class="w-100 h-100">
    <div class="w-100 h-100" id="container">
      <div
        v-show="overShow"
        id="overlayContainer"
        style="width: 260px; color: beige; font-size: 18px"
      >
        <div class="w-100 p-1 ps-3 changcolor" style="">
          {{ overName }}
        </div>
        <div class="ps-3 p-2 pt-3">最大人流量：</div>
        <div class="ps-3 p-2">当前人流量：</div>
        <div class="ps-3 p-2">当日最大人流量：</div>
        <div class="w-100 p-2 d-flex justify-content-center">
          <el-button type="warning" size="small">查看该处监控</el-button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "",
  data() {
    return {
      data: [
        {
          lnglat: [116.700471, 23.407387],
          name: "护堤路210号申通",
          style: 2,
        },
        {
          lnglat: [116.70066, 23.407591],
          name: "护堤水利交界_川香阁",
          style: 2,
        },
        { lnglat: [116.698321, 23.404067], name: "陇北三巷1号", style: 2 },
        {
          lnglat: [116.697144, 23.404608],
          name: "陇北十一巷1号1枪",
          style: 2,
        },
        {
          lnglat: [116.69714, 23.404599],
          name: "陇北十一巷1号2枪",
          style: 2,
        },
        { lnglat: [116.696565, 23.402573], name: "陇东六巷1号", style: 2 },
        {
          lnglat: [116.699964, 23.402654],
          name: "陇东一巷一号1枪",
          style: 2,
        }, //对门
        {
          lnglat: [116.699991, 23.402642],
          name: "陇东一巷一号1枪2",
          style: 2,
        }, //对建筑
        {
          lnglat: [116.700402, 23.405435],
          name: "陇头工业区1号1枪",
          style: 2,
        },
        {
          lnglat: [116.700293, 23.405438],
          name: "陇头工业区1号2枪",
          style: 2,
        },
        {
          lnglat: [116.700512, 23.405399],
          name: "陇头工业区1号3枪",
          style: 2,
        },
        {
          lnglat: [116.699033, 23.405754],
          name: "陇头工业区2号_申通",
          style: 2,
        },
        {
          lnglat: [116.697541, 23.4053],
          name: "陇头工业区二区4号",
          style: 2,
        },
        {
          lnglat: [116.69787, 23.406198],
          name: "陇头工业区一区4号",
          style: 2,
        },
        {
          lnglat: [116.697842, 23.406254],
          name: "陇头工业区一区4号1枪",
          style: 2,
        },
        { lnglat: [116.698704, 23.403101], name: "陇头集市", style: 2 },
        { lnglat: [116.698376, 23.4037], name: "陇头居委会", style: 2 },
        { lnglat: [116.700183, 23.404516], name: "陇新二巷4号", style: 2 },
        { lnglat: [116.699663, 23.40335], name: "陇中九巷1号", style: 2 },
        { lnglat: [116.700295, 23.403], name: "陇中七巷1号1枪", style: 2 },
        { lnglat: [116.70029, 23.403], name: "陇中七巷1号2枪", style: 2 },
        { lnglat: [116.700074, 23.404082], name: "陇中一巷1号", style: 2 },
        { lnglat: [116.699088, 23.407875], name: "水利路中段", style: 2 },
        { lnglat: [116.698513, 23.408228], name: "水利路转角", style: 2 },
        { lnglat: [116.696582, 23.402664], name: "新西十六巷11号", style: 2 },
        {
          lnglat: [116.69891, 23.401559],
          name: "新西十六巷11号1枪",
          style: 2,
        },
        { lnglat: [116.69817, 23.402058], name: "新西一巷一号1枪", style: 2 },
        {
          lnglat: [116.697979, 23.402212],
          name: "新西一巷一号2枪",
          style: 2,
        },
        // ...更多数据
      ],
      overShow: false,
      overName: "",
    };
  },
  methods: {
    openOver(name) {
      this.overShow = true;
      this.overName = name;
    },
    updatePoints() {
      console.log("")
      // // 获取地图容器的像素大小
      // const mapContainer = document.getElementById("container");
      // const containerWidth = mapContainer.offsetWidth;
      // const containerHeight = mapContainer.offsetHeight;

      // // 获取地图中心点经纬度
      // const center = this.map.getCenter();
      // // 将中心点经纬度转换为像素坐标
      // const centerPixel = this.map.lngLatToContainer(center);

      // // 计算相对于地图容器的绝对位置（px）
      // const x =
      //   (centerPixel.getX() / this.map.getSize().getWidth()) * containerWidth;
      // const y =
      //   (centerPixel.getY() / this.map.getSize().getHeight()) * containerHeight;

      // // 更新点的位置信息
      // this.points.push({ x, y });
    },
  },
  mounted() {
    var op = this.openOver;
    AMapLoader.load({
      key: "847ad1cefeddf2879da67b9d88ae686a", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        var markers = []; // 保存所有标记的数组
        // 创建地图对象
        var map = new AMap.Map("container", {
          center: [116.698321, 23.404067],
          viewMode: "2D",
          pitch: 60,
          // 隐藏默认楼块
          features: ["bg", "road", "point"],
          mapStyle: "amap://styles/db9efe6a1745ac24b7269b862f359536",
          zoom: 17,
        });
        AMap.plugin(
          [
            "AMap.ToolBar",
            "AMap.Scale",
            "AMap.HawkEye",
            "AMap.MapType",
            "AMap.Geolocation",
          ],
          function () {
            // 在图面添加比例尺控件，展示地图在当前层级和纬度下的比例尺
            map.addControl(new AMap.Scale());
          }
        );
        const traffic = new AMap.TileLayer.Traffic({
          autoRefresh: true, //是否自动刷新，默认为false
          interval: 180, //刷新间隔，默认180s
        });
        // 卫星图层
        var satellite = new AMap.TileLayer.Satellite({
          map: map,
          zoom: 17,
        });
        // 道路图层
        var roadNet = new AMap.TileLayer.RoadNet({
          map: map,
          zoom: 17,
        });
        var defaultIcon = new AMap.Icon({
          image:
            "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
          size: new AMap.Size(20, 20), //图标大小
          imageSize: new AMap.Size(20, 20),
          // imageOffset: new AMap.Pixel(-20, -20),
        });
        var selectIcon = new AMap.Icon({
          image:
            "//a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-red.png",
          size: new AMap.Size(24, 24), //图标大小
          imageSize: new AMap.Size(24, 24),
        });
        // 添加所有点的标记
        this.data.forEach(function (point) {
          var marker = new AMap.Marker({
            map: map,
            position: point.lnglat,
            icon: defaultIcon,
            i: point,
          });
          var content = [marker._originOpts.i.name];
          var infoWindow = new AMap.InfoWindow({
            anchor: "top-center",
            content: content.join("<br>"), //传入 dom 对象，或者 html 字符串
            offset: new AMap.Pixel(8, 17),
          });
          // console.log(marker._originOpts.i.lnglat);
          marker.on("mouseover", function (e) {
            // console.log(marker);
            infoWindow.open(map, marker._originOpts.i.lnglat);
          });

          marker.on("mouseout", function (e) {
            // marker.setLabel({ content: "" });
            infoWindow.close();
          });
          // 监听点击事件
          marker.on("click", () => {
            // 先将所有标记设置为默认样式
            markers.forEach(function (m) {
              m.setIcon(defaultIcon);
            });
            // console.log(marker);
            // console.log(marker._originOpts.i.name);
            // 将点击的标记设置为选中样式
            // console.log(this)
            // this.openOver(marker._originOpts.i.name);
            op(marker._originOpts.i.name);
            marker.setIcon(selectIcon);
          });

          markers.push(marker); // 将标记添加到数组中

          // 监听地图点击事件
          map.on("click", function (e) {
            // 将点击点的经纬度转换为像素坐标
            const targetPixel = map.lngLatToContainer(e.lnglat);

            // 获取地图容器的像素大小
            const mapContainer = document.getElementById("container");
            const containerWidth = mapContainer.offsetWidth;
            const containerHeight = mapContainer.offsetHeight;

            // 计算相对于地图容器的绝对位置（px）
            const absoluteX =
              (targetPixel.getX() / map.getSize().getWidth()) * containerWidth;
            const absoluteY =
              (targetPixel.getY() / map.getSize().getHeight()) *
              containerHeight;

            // 打印目标点在CSS中的绝对位置
            console.log(
              `点击的点在CSS中的绝对位置：${absoluteX}px, ${absoluteY}px`
            );
          });

          // 监听地图拖拽事件
          map.on("dragging", this.updatePoints);

          // 监听地图缩放事件
          map.on("zoomchange", this.updatePoints);
        });
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<style lang="css" scoped>
#overlayContainer {
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: rgba(48, 40, 40, 0.9);

  z-index: 100;
}
.changcolor {
  background-image: linear-gradient(
    to bottom right,
    rgba(255, 166, 0, 0.9),
    rgb(236, 219, 65, 0.9)
  );
}
</style>

