var app = angular.module("rembrandtApp", []);
app.controller("paintingController", function ($scope) {
    $scope.paintingCount = 0;

    $scope.paintings = [
        "paintings/1.jpg",
        "paintings/2.jpg",
        "paintings/3.jpg",
        "paintings/4.jpg"
    ]

    $scope.previous = function() {
        $scope.paintingCount = $scope.paintingCount - 1;
    }

    $scope.next = function() {
        $scope.paintingCount = $scope.paintingCount + 1;
    }

});