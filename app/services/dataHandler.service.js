(function(angular){
    'use strict';

    angular.module('app').service('dataHandlerService', dataHandlerService)
    dataHandlerService.$inject = ['httpRequestsService'];
    
    function dataHandlerService(httpRequestsService){
        let users = [];

        getAllUsers().then(res => {
            users = res;
        }).catch(err => {
            console.log(err)
        });

        function getAllUsers() {
            return new Promise((resolve, reject) => {
                httpRequestsService.getUsers()
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        }

        function getUserDetail(id) {
            return new Promise((resolve, reject) => {
                httpRequestsService.getUsers()
                .then(res => {
                    let user = res.data.filter(el => el.id === id);
                    if(user.length === 0) {
                        resolve({message: 'user not found'})
                    } else {
                        resolve(user[0]);
                    }
                }).catch(err => {
                    reject(err);
                });
            });
        }

        function addUser(user) {
            return new Promise((resolve, reject) => {
                user['id'] = users.length === 0 
                ? 1
                : users.reduce((privious, current) => {
                    return privious.id > current.id ? privious : current;
                }).id + 1;
                users.push(user);
                httpRequestsService.saveUsers(users)
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        }

        function findAndReplace(arr, obj) {
            for(let index = 0; index<arr.length; index++) {
                if(arr[index].id === obj.id) {
                    arr[index] = obj;
                    break;
                }
            }
            return arr;
        }

        function updateUser(user) {
            return new Promise((resolve, reject) => {
                let updatedList = findAndReplace(users, user);
                httpRequestsService.saveUsers(updatedList)
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        }

        function deleteUser(id) {
            return new Promise((resolve, reject) => {
                let updatedList = users.filter(elem => elem.id !== id);
                httpRequestsService.saveUsers(updatedList)
                .then(res => {
                    resolve(res.data);
                }).catch(err => {
                    reject(err);
                });
            });
        }

        return {
            getAllUsers: getAllUsers,
            getUserDetail: getUserDetail,
            addUser: addUser,
            updateUser: updateUser,
            deleteUser: deleteUser
        };
    }

})(window.angular);