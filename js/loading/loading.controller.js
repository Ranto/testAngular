(function(){
    'use strict';
    var app = angular.module("loadingApp");

    app.controller("loadingController", loadingController);
    function loadingController($scope) {
        var vm = this;

        vm.data = "AAA";
    }
})();
