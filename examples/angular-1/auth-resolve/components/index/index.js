angular.module('myApp.index', []).
  controller('IndexController', ['Server', IndexController]);

function IndexController ( Server ) {
  this.Server = Server;
}


IndexController.prototype.activate = function () {
  var _this = this;
  return this.Server.getAllDocs()
    .then(function ( docs ) {
      _this.docs = docs;
    });
};
