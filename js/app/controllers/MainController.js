// MainController.js

function MainController() {

  ctrl = this;
  ctrl.here = "Hello World";
  ctrl.nowhere = "Hello Nowhere"


};

angular
    .module('app')
    .controller('MainController', MainController);
