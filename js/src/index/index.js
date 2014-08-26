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
      require('../traffic/index.js');
    });
    $('#toolbarBtn').click(function () {
      var toolbar = require('../toolbar/index.js');
      toolbar.addControl(mapObj);
    });
    $('#toolbarBtnRemove').click(function () {
      var toolbar = require('../toolbar/index.js');
      toolbar.removeControl(mapObj);
    });
  }
  
});