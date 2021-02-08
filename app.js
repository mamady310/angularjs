var myApp = angular.module("AngularApp", []);

myApp.controller("HelloController", function($scope){
$scope.expression = {
    key1: 'welcome',
    key2: "to",
    key3: "tulane.com"
}
});