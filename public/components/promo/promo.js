"use strict";
angular.module("PromoModule", [])
    .directive("promo", ["StyleFactory", function(StyleFactory){
        return {
            scope: { id: "@" },
            replace: true,
            restrict: "E",
            templateUrl: "components/promo/promo.html",
            compile:  function () {
                return {
                    pre: function () {
                        StyleFactory.get("promo", "components/promo/promo.css");
                    }
                }
            },
            controller: "PromoController"
        }
    }])
    .controller("PromoController", ["$scope", "ModelFactory", function($scope, ModelFactory) {
        var api = "/api/promo/" + $scope.id;
        ModelFactory.get(api)
            .success(function(data){
                $scope.model = data;
                console.log($scope.id, $scope.model)
            });
    }]);