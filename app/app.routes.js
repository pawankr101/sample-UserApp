((angular) => {
    'use strict';
    
    angular.module('app').config(configure);

    configure.$inject=['$stateProvider', '$urlRouterProvider'];
    function configure($stateProvider, $urlRouterProvider) {
        $stateProvider
        .state('app', {
            cache: true,
            views: {
                '':{
                    templateUrl:"app/main/main.html",
                    controller:'mainController as main'
                },
                'header@app': {
                    templateUrl: 'app/components/header/header.html',
                    controller:'headerController as header'
                }
            }
        })
        .state('app.home', {
            display_name: 'Components',
            url: '/home',
            cache: true,
            views: {
                'pagecontent': {
                    template: '<div home-component />'
                }
            },
            resolve: {
                loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('home');
                }]
            }
        })
        .state('app.form', {
            display_name: 'Components',
            url: '/form/:id',
            cache: true,
            views: {
                'pagecontent': {
                    template: '<form-component />'
                }
            },
            resolve: {
                loadFiles: ['$ocLazyLoad', function($ocLazyLoad) {
                    return $ocLazyLoad.load('form');
                }]
            }
        });
        $urlRouterProvider.otherwise('/home');
    }

})(window.angular);