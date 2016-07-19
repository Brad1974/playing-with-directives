function basicDirective () {
  return {
    scope: {},
    template: [
        '<p>{{ basic.id }} </p>',
        '<p>{{ basic.there }} </p>',
        '<p>{{ basic.somewhere }}</p>'
      ].join(""),

    controller: function () {
      dr = this; // this I understand because bindtoController
      dr.there = ctrl.here; // but why does this work?
      dr.somewhere = ctrl.nowhere; // same issue

    },
    controllerAs: "basic",
    bindToController: {id: "="}
    }
}

angular
  .module('app')
  .directive('basicDirective', basicDirective);
