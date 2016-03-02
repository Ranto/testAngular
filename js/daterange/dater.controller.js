(function(){
    'use strict';

    angular.module("essaiApp").controller("daterController", function($scope) {
        $scope.dateRange = { startDate: null, endDate: null};

        $scope.opts = {
            locale: {
                applyClass: 'btn-green',
                applyLabel: "Valider",
                fromLabel: "Du",
                toLabel: "Au",
                cancelLabel: 'Annuler',
                customRangeLabel: 'Selection',
                daysOfWeek: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
                firstDay: 1,
                monthNames: ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mais', 'Juin', 'Juillet', 'Aout', 'Septembre',
                    'Octobre', 'Novembre', 'Décembre'
                ],
                format: 'DD/MM/YYYY'
            },
            ranges: {
                '7 derniers jours': [moment().subtract(6, 'days'), moment()],
                '30 derniers jours': [moment().subtract(29, 'days'), moment()]
            }
        };


    });
})();
