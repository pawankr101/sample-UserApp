(() => {
    'use strict';

    angular.module('app').factory('httpMyJsonService', httpMyJsonService);

    httpMyJsonService.$inject = ['$http'];
    function httpMyJsonService($http) {
        var userArrayUrl = 'https://api.myjson.com/bins/yatq8';
        var serviceObj = {};

        serviceObj.getProducts = function() {
            return $http({
                method: 'GET',
                url: userArrayUrl
            });
        };

        serviceObj.putProducts = function(products) {
            return $http({
                method: 'PUT',
                url: userArrayUrl,
                data: products
            });
        };

        return serviceObj;
    }
})();