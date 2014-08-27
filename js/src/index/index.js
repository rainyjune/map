define(function (require, exports, module) {
  var mapObj = null;
  function initialize() {
    var position = new AMap.LngLat(116.397428, 39.90923);
    mapObj = new AMap.Map("container", {
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
    bindPageEventListeners();
  });

  function bindPageEventListeners() {
    $('#trafficBtn').click(function () {
      require.async('../traffic/index.js', function (traffic) {
        mapObj = traffic.showTraffic();
      });
      return false;
    });
    $('#trafficBtnRemove').click(function () {
      require.async('../traffic/index.js', function (traffic) {
        mapObj = traffic.removeTraffic();
      });
      return false;
    });
    $('#toolbarBtn').click(function () {
      require.async('../toolbar/index.js', function (toolbar) {
        toolbar.addControl(mapObj);
      });
      return false;
    });
    $('#toolbarBtnRemove').click(function () {
      require.async('../toolbar/index.js', function (toolbar) {
        toolbar.removeControl(mapObj);
      });
      return false;
    });
  }
  
});