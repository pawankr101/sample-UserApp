(() => {
    'use strict';

    angular.module('app').factory('httpRequestsService', httpRequestsService);

    httpRequestsService.$inject = ['$http'];
    function httpRequestsService($http) {
        var userArrayUrl = 'https://api.myjson.com/bins/yatq8';
        var serviceObj = {};

        serviceObj.getUsers = () => {
            return $http({
                method: 'GET',
                url: userArrayUrl
            });
        };

        serviceObj.putUsers = (users) => {
            return $http({
                method: 'PUT',
                url: userArrayUrl,
                data: users
            });
        };

        return serviceObj;
    }
})();