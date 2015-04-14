angular.module('myApp.doc', [])
.controller('DocController', [ '$routeParams', '$location', 'Server', DocController ]);


function DocController ( $routeParams, $location, Server ) {
  this.Server = Server;
  this.$location = $location;
  this.id = $routeParams.id;
}

DocController.prototype.canActivate = function () {
  var _this = this;
  return this.Server.getDoc(this.id)
    .then(function ( doc ) {
      angular.extend(_this, doc);
    })
    .catch(function ( code, reason ) {
      _this.$location.path('/');
    });
};
