angular.module('myApp', [
  'ngNewRouter',
  'myApp.index',
  'myApp.doc',
  'myApp.server'
])
.controller('AppController', ['$router', AppController]);

function AppController($router) {
  $router.config([
    { path: '/',          component: 'index' },
    { path: '/doc/:id',  component: 'doc' },
  ]);
}
