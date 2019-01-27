(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath','$q'];
function MenuService($http, ApiPath,$q) {
  var service = this;
  service.users=[];
  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };
  service.short=function (x) {

    var config = {};
    return $http.get(ApiPath +'/menu_items/'+x+'.json', config).then(function successCallback(response) {
      return response;
    },function errorCallback(response) {
        return response;
    });

  };
  service.addUsers=function (fname,lname,email,phone,fav,data) {
    var user={
      'start_name':fname,
      'last_name':lname,
      'email':email,
      'phone':phone,
      'favorite':fav,
      'pdata':data
    }
    service.users=user;
    console.log(service.users);
  };
  service.getData=function () {
    return service.users;
  }
}



})();
