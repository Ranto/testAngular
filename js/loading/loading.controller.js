(function(){
    'use strict';
    var app = angular.module("loadingApp");

    app.controller("loadingController", loadingController);
    function loadingController($scope, resourceService, $sce) {
        var vm = this;
        vm.loading = true;

        resourceService.getPDF().then( function(dataResponse) {
            vm.loading = false;
            var data = new Blob([dataResponse.data], {type: "application/pdf"});
            var url = URL.createObjectURL(data);

            vm.surl = $sce.trustAsResourceUrl(url);
        });
    }
})();
