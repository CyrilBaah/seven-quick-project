var app = angular.module("shoppingListApp", []); 
app.controller("listController", function($scope) {
    $scope.list = ["Milk", "Bread", "Cheese"];
    $scope.deleted = [];
   
    $scope.addItem = function(x){
        $scope.list.push(x);
        $scope.newItem = "";
    }

    $scope.removeItem = function (y) {
        var deleted = $scope.list.splice(y, 1);
        $scope.deleted.push(deleted);
    }

    $scope.restoreItem = function (z) {
        var list = $scope.deleted.splice(z, 1);
        $scope.list.push(list);
    }
});