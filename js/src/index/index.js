﻿define(function (require, exports, module) {
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
      var traffic = require('../traffic/index.js');
      mapObj = traffic.showTraffic();
      return false;
    });
    $('#trafficBtnRemove').click(function () {
      var traffic = require('../traffic/index.js');
      mapObj = traffic.removeTraffic();
      return false;
    });
    $('#toolbarBtn').click(function () {
      var toolbar = require('../toolbar/index.js');
      toolbar.addControl(mapObj);
      return false;
    });
    $('#toolbarBtnRemove').click(function () {
      var toolbar = require('../toolbar/index.js');
      toolbar.removeControl(mapObj);
      return false;
    });
  }
  
});