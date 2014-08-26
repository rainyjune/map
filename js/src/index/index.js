define(function (require, exports, module) {
  function initialize() {
    var position = new AMap.LngLat(116.397428, 39.90923);
    var mapObj = new AMap.Map("container", {
      view: new AMap.View2D({
        center: position,
        zoom: 14,
        rotation: 0
      }),
      lang: "zh_cn"
    });
  }

  $(document).ready(function () {
    initialize();
  });
  
});