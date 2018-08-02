((angular) => {
    'use strict';

    angular.module('app').controller('headerController', headerController);
    headerController.$inject = ['$scope'];

    function headerController($scope) {
        $scope.heading = 'USERS APP';
    }

})(window.angular);