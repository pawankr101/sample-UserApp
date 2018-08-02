(() => {
    'use strict';

    angular.module('app').factory('httpRequestsService', httpRequestsService);

    httpRequestsService.$inject = ['$http'];
    function httpRequestsService($http) {
        // let userArrayUrl = 'https://api.myjson.com/bins/yatq8';
        let userArrayUrl = 'http://localhost:8000/users';
        let serviceObj = {};

        serviceObj.getUsers = () => {
            return $http({
                method: 'GET',
                url: userArrayUrl
            });
        };

        serviceObj.saveUsers = (users) => {
            return $http({
                method: 'POST',
                url: userArrayUrl,
                data: users
            });
        };

        return serviceObj;
    }
})();