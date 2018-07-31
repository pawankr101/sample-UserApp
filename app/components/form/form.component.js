((angular) => {
    'use strict';

    angular.module ('app').directive ('formComponent', formComponent);
    formComponent.$inject = [];

    function formComponent() {
        function constructor($element, $attrs) {
            // console.log('constructor');
        }

        function formController($scope, $element, $attrs){
            $scope.form = 'FORM';
            $scope.cities = ['delhi', 'mumbai', 'pune', 'noida', 'gurgaon'];
            $scope.user = {
                name: '',
                gender: '',
                email: '',
                password: '',
                mobile: '',
                address: '',
                city: ''
            };
            $scope.errorMsg = {
                name: '',
                gender: '',
                email: '',
                password: '',
                mobile: '',
                address: '',
                city: ''
            };
            $scope.emailPattern = /\S+@\S+\.\S+/;
            $scope.show = false;

            function hasError(field) {
                if ($scope.user[field].length === 0) {
                  $scope.errorMsg[field] = `${field} required`;
                  return true;
                }
                if (field === 'name' && $scope.user.name.length > 40) {
                  $scope.errorMsg.name = 'maximum length can be 40';
                  return true;
                }
                if (field === 'email' && !$scope.emailPattern.test($scope.user.email)) {
                  $scope.errorMsg.email = 'invalid email';
                  return true;
                }
                if (field === 'mobile' && (!(["9", "8", "7", "6"].includes($scope.user.mobile[0])) || $scope.user.mobile.length !== 10)) {
                  $scope.errorMsg.mobile = 'invalid number';
                  return true;
                }
                if (field === 'address' && $scope.user.address.length > 200) {
                  $scope.errorMsg.address = 'maximum length can be 200';
                  return true;
                }
                $scope.errorMsg[field] = '';
                return false;
            }

            function hasAnyError() {
                let error = false;
                let fields = Object.keys($scope.user);
                fields.forEach(field => {
                  hasError(field);
                  if ($scope.errorMsg[field].length !== 0) {
                    error = true;
                  }
                });
                return error
            }

            $scope.validateField = (field) => {
                $scope.show = false;
                if (field === 'mobile') {
                    (/^[0-9]{0,10}$/.test($scope.user[field])) ? $scope.user[field] = $scope.user[field] : $scope.user[field] = '';
                }
                hasError(field);
            };

            $scope.submit = () => {
                let error = hasAnyError()
                if(error) {
                    console.log('found Error');
                    $scope.show = false;
                    return error;
                }
                $scope.show = true;
            };
        }

        function preLink($scope, $element, $attrs, controller){
            // console.log('pre', $scope.form);
        }

        function postLink($scope, $element, $attrs, controller){
            // console.log('post', $scope.form);
        }

        return {
            templateUrl: 'app/components/form/form.html',
            compile: ($element, $attrs) => {
                constructor($element, $attrs);
                return {
                    pre: preLink,
                    post: postLink
                }
            },
            controller: formController,
            controllerAs: 'form'
        }
    }

})(window.angular);