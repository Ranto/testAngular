(function(){
    'use strict';

    var app = angular.module("loadingApp");

    app.service('resourceService', resourceService);

    function resourceService($http, $q) {
        this.getPDF = function () {
            var deferred = $q.defer();
            $http.get('./resources/fiche.pdf')
                .success( function(data, status) {
                    deferred.resolve(data);
                }).error( function(data, status) {
                    deferred.reject('Impossible d\'avoir les données');
                });

            return deferred.promise;
        };
    }
})();
