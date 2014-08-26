define(function (require, exports, module) {
  

  module.exports = {
    showTraffic: function () {
      var mapObj = new AMap.Map("container", {
        layers: [
         new AMap.TileLayer(),//加载地图底图
         new AMap.TileLayer.Traffic()//叠加实时交通图层
        ],
        view: new AMap.View2D({
          center: new AMap.LngLat(116.397428, 39.90923),//设置地图中心点
          zoom: 14//设置地图缩放级别

        })
      });
      return mapObj;
    },
    removeTraffic: function () {
      var mapObj = new AMap.Map("container", {
        layers: [
         new AMap.TileLayer(),//加载地图底图
         //new AMap.TileLayer.Traffic()//叠加实时交通图层
        ],
        view: new AMap.View2D({
          center: new AMap.LngLat(116.397428, 39.90923),//设置地图中心点
          zoom: 14//设置地图缩放级别

        })
      });
      return mapObj;
    }
  };
});