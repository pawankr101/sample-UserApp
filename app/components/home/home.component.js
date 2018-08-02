((angular) => {
    'use strict';

    angular.module ('app').directive ('homeComponent', homeComponent);
    homeComponent.$inject = ['dataHandlerService'];

    function homeComponent(dataHandlerService) {
        function constructor($element, $attrs) {
            // console.log('constructor');
        }

        function homeController($scope, $element, $attrs, $sce){
            $scope.userList = [];
            $scope.sortOption = {
                field: null,
                reverse: false
            };
            $scope.selectedUser = null;
            getList();

            function getList() {
                dataHandlerService.getAllUsers()
                .then(res => {
                    $scope.userList = res;
                    $scope.$applyAsync()
                }).catch(err => {
                    console.log(err);
                });
            }

            $scope.triggerSort = (field) => {
                ($scope.sortOption.field === field)
                ?  $scope.sortOption.reverse = !$scope.sortOption.reverse
                :  $scope.sortOption = {
                    field: field,
                    reverse: false
                };
            };

            $scope.selectUser = (id) => {
                $scope.selectedUser = $scope.userList.filter(el => el.id === id)[0];
            };

            $scope.renderArrow = (field) => {
                if($scope.sortOption.field === field) {
                  if($scope.sortOption.reverse === false) {
                    return $sce.trustAsHtml(' &#8593;');
                  }
                  if($scope.sortOption.reverse === true) {
                    return $sce.trustAsHtml(' &#8595;');
                  }
                }
                return null;
            }
        }

        function preLink($scope, $element, $attrs, controller){
            // console.log('pre', $scope);
        }

        function postLink($scope, $element, $attrs, controller){
            // console.log('post', $scope);
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