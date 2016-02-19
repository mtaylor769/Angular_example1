var app = angular.module('example',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/main', {
    templateUrl: 'main.html',
    controller: 'AppCtrl'
  }) // end routeProvider.when
  .otherwise({redirectTo: '/main'}); 
}]) // end config routing

.controller('AppCtrl',['$scope', function($scope){
  console.log($scope);
}])
; // end controller