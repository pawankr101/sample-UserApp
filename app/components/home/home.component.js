((angular) => {
    'use strict';

    angular.module ('app').directive ('homeComponent', homeComponent);
    homeComponent.$inject = [];

    function homeComponent() {
        function constructor($element, $attrs) {
            console.log('constructor');
        }

        function homeController($scope, $element, $attrs){
            $scope.name = 'home';
        }

        function preLink($scope, $element, $attrs, controller){
            console.log('pre', $scope.name);
        }

        function postLink($scope, $element, $attrs, controller){
            console.log('post', $scope.name);
        }

        return {
            templateUrl: 'app/components/home/home.html',
            compile: ($element, $attrs) => {
                constructor($element, $attrs);
                return {
                    pre: preLink,
                    post: postLink
                }
            },
            controller: homeController,
            controllerAs: 'home',
            // link: {
            //     pre: preLink,
            //     post: postLink
            // }
        }
    }

})(window.angular);