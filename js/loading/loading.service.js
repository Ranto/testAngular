(function(){
    'use strict';

    var app = angular.module("loadingApp");

    app.service('resourceService', resourceService);

    function resourceService($http, $timeout) {
        // Retourne un httpPromise
        this.getPDF = function () {
            return $http.get(
                        './resources/fiche.pdf',
                        {responseType: 'arraybuffer'}
            );
        };
    }
})();
