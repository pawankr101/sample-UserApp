(() => {
    'use strict';

    angular.module('app').factory('httpMyJsonService', httpMyJsonService);

    httpMyJsonService.$inject = ['$http'];
    function httpMyJsonService($http) {
        var userArrayUrl = 'https://api.myjson.com/bins/yatq8';
        var serviceObj = {};

        serviceObj.getUsers = function() {
            return $http({
                method: 'GET',
                url: userArrayUrl
            });
        };

        serviceObj.putUsers = function(users) {
            return $http({
                method: 'PUT',
                url: userArrayUrl,
                data: users
            });
        };

        return serviceObj;
    }
})();