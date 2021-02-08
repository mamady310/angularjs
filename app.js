var myApp = angular.module("AngularApp", []);

myApp.controller("HelloController", function($scope){
$scope.expression1 = "Hello";
$scope.expression2 = "world"
});