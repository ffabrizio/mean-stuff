"use strict";

angular.module("ContentModule", [])

.directive("content", ["StyleFactory", function(StyleFactory){
    return {
        scope: { id: "@" },
        replace: true,
        restrict: "E",
        templateUrl: "components/content/content.html",
        compile:  function () {
            return {
                pre: function () {
                    StyleFactory.get("content", "components/content/content.css");
                }
            }
        },
        controller: "ContentController"
    }
}])

.controller("ContentController", ["$scope", "ModelFactory", function($scope, ModelFactory) {
    ModelFactory.get("/api/content/" + $scope.id)
        .success(function(data){
            $scope.model = data;
            console.log($scope.id, $scope.model)
        });
}]);