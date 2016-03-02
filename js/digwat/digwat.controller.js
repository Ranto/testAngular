(function() {
    'use strict';

    var app = angular.module("essaiApp");

    app.controller("digwatController", digwatController);
    function digwatController($scope, resourceService, $sce) {
        $scope.watchthis = "AA";

        $scope.$watch('watchthis', function(newValue, oldValue) {
            console.log(newValue + " <- " + oldValue);
        });
    }
})();
