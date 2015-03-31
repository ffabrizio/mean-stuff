"use strict";

angular.module("MeanStuff", [
    "ContentModule",
    "PromoModule"
])
.factory("StyleFactory", function ($http) {
    var factory = {};
    factory["get"] = function (name, url) {
        var cssId = "css-" + name;
        $http.get(url, { cache: true })
            .success(function () {
                if (document.getElementById(cssId) === null) {
                    angular.element(document.querySelector('head'))
                        .append("<link id=\"" + cssId + "\" href=\"" + url + "\" rel=\"stylesheet\">");
                }
            });
    };
    return factory;
})
.factory("ModelFactory", function ($http) {
    var factory = {};
    factory["get"] = function (url) {
        console.log(url)
        return $http.get(url, { cache: true });
    };
    return factory;
});

angular.bootstrap(document, ["MeanStuff"]);