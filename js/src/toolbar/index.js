define(function (require, exports, module) {

  var tool = null;
  

  module.exports = {
    addControl: function (mapObj) {
      mapObj.plugin(["AMap.ToolBar"], function () {
        //加载工具条
        tool = new AMap.ToolBar();
        mapObj.addControl(tool);
      });
    },
    removeControl: function (mapObj) {
      mapObj.removeControl(tool);
    }
  }
});