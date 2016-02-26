(function () {
    'use strict';
    var app = angular.module('essaiApp');

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/dater");
        $stateProvider
            .state('home', {
                url: "/",
                templateUrl: "partials/home.html"
            })
            .state('loading', {
                url: "/loading",
                templateUrl: "partials/loading/loading.html",
                controller: "loadingController as ctrl"
            }).state('daterange', {
                url: "/dater",
                templateUrl: "partials/dater/dater.html",
                controller: "daterController as ctrl"
            });
    });
})();
