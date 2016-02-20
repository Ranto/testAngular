(function () {
    'use strict';
    var app = angular.module('loadingApp');

    app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state('loading', {
                url: "/",
                templateUrl: "partials/loading/loading.html",
                controller: "loadingController as ctrl"
            });
    });
})();
