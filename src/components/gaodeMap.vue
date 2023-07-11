<template>
  <div class="w-100 h-100" id="container"></div>
</template>
<script>
import AMapLoader from "@amap/amap-jsapi-loader";
export default {
  name: "",
  data() {
    return {
      data:[
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
        ]
    };
  },
  mounted() {
    AMapLoader.load({
      key: "", // 申请好的Web端开发者Key，首次调用 load 时必填
      version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
      plugins: [""], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
      .then((AMap) => {
        var map = new AMap.Map("container", {
          center: [116.698321, 23.404067],
          viewMode: "2D",
          pitch: 60,
          // 隐藏默认楼块
          features: ["bg", "road", "point"],
          mapStyle: "amap://styles/db9efe6a1745ac24b7269b862f359536",
          zoom: 17,
        });

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

        var style = [
          {
            url: "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
            anchor: new AMap.Pixel(20, 20),
            size: new AMap.Size(20, 20),
          },
        ];

        var mass = new AMap.MassMarks("", {
          cursor: "pointer",
          style: style,
        });



        mass.setData(this.data, {
          lnglat: "lnglat", // 指定坐标数据的来源，数据格式: 经度在前，纬度在后，数组格式。
        });
        mass.setMap(map);
        var marker = new AMap.Marker({ content: " ", map: map });

        mass.on("mouseover", function (e) {
          marker.setPosition(e.data.lnglat);
          marker.setLabel({
            content: e.data.name + "\n" + "经纬度：" + e.data.lnglat,
          });
        });

        mass.on("mouseout", function (e) {
          marker.setLabel({ content: "" });
        });
        mass.on("click", function (e) {
          console.log("fadsf");
          console.log(e);
        });

        AMapUI.loadUI(
          ["overlay/SimpleInfoWindow"],
          function (SimpleInfoWindow) {
            var infoWindow = new SimpleInfoWindow({
              infoTitle: "<p>这里是标题</p>",
              infoBody: "<p>这里是内容。</p>",
            });

            //显示在map上
            infoWindow.open(map, map.getCenter());
          }
        );
      })
      .catch((e) => {
        console.log(e);
      });
    var map = new AMap.Map("container", {
      center: [116.698321, 23.404067],
      viewMode: "2D",
      pitch: 60,
      // 隐藏默认楼块
      features: ["bg", "road", "point"],
      mapStyle: "amap://styles/db9efe6a1745ac24b7269b862f359536",
      zoom: 17,
    });

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

    var style = [
      {
        url: "https://a.amap.com/jsapi_demos/static/demo-center/icons/poi-marker-default.png",
        anchor: new AMap.Pixel(20, 20),
        size: new AMap.Size(20, 20),
      },
    ];

    var mass = new AMap.MassMarks("", {
      cursor: "pointer",
      style: style,
    });

    var data = [
      { lnglat: [116.700471, 23.407387], name: "护堤路210号申通", style: 2 },
      { lnglat: [116.70066, 23.407591], name: "护堤水利交界_川香阁", style: 2 },
      { lnglat: [116.698321, 23.404067], name: "陇北三巷1号", style: 2 },
      { lnglat: [116.697144, 23.404608], name: "陇北十一巷1号1枪", style: 2 },
      { lnglat: [116.69714, 23.404599], name: "陇北十一巷1号2枪", style: 2 },
      { lnglat: [116.696565, 23.402573], name: "陇东六巷1号", style: 2 },
      { lnglat: [116.699964, 23.402654], name: "陇东一巷一号1枪", style: 2 }, //对门
      { lnglat: [116.699991, 23.402642], name: "陇东一巷一号1枪2", style: 2 }, //对建筑
      { lnglat: [116.700402, 23.405435], name: "陇头工业区1号1枪", style: 2 },
      { lnglat: [116.700293, 23.405438], name: "陇头工业区1号2枪", style: 2 },
      { lnglat: [116.700512, 23.405399], name: "陇头工业区1号3枪", style: 2 },
      { lnglat: [116.699033, 23.405754], name: "陇头工业区2号_申通", style: 2 },
      { lnglat: [116.697541, 23.4053], name: "陇头工业区二区4号", style: 2 },
      { lnglat: [116.69787, 23.406198], name: "陇头工业区一区4号", style: 2 },
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
      { lnglat: [116.69891, 23.401559], name: "新西十六巷11号1枪", style: 2 },
      { lnglat: [116.69817, 23.402058], name: "新西一巷一号1枪", style: 2 },
      { lnglat: [116.697979, 23.402212], name: "新西一巷一号2枪", style: 2 },
      // ...更多数据
    ];

    mass.setData(data, {
      lnglat: "lnglat", // 指定坐标数据的来源，数据格式: 经度在前，纬度在后，数组格式。
    });
    mass.setMap(map);
    var marker = new AMap.Marker({ content: " ", map: map });

    mass.on("mouseover", function (e) {
      marker.setPosition(e.data.lnglat);
      marker.setLabel({
        content: e.data.name + "\n" + "经纬度：" + e.data.lnglat,
      });
    });

    mass.on("mouseout", function (e) {
      marker.setLabel({ content: "" });
    });
    mass.on("click", function (e) {
      console.log("fadsf");
      console.log(e);
    });


  },
};
</script>

<style lang="scss" scoped>
</style>

