((angular) => {
    'use strict';

    var app = angular.module('app', ['ui.router', 'oc.lazyLoad', 'ngAnimate', 'toaster']);
    
    app.controller('apptoaster', apptoaster);
    apptoaster.$inject = ['$scope', 'toaster'];
    function apptoaster($scope, toaster) {}
})(window.angular);