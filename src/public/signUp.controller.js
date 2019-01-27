(function () {
  "use strict";

  angular.module('common')
  .controller("signUpController",signUpControllerMain);
  signUpControllerMain.$inject=['MenuService']
  function signUpControllerMain(MenuService) {
    var temp=this;
    temp.fav="";
    temp.err="";
    temp.Success="";
    temp.get=function() {
      var details = MenuService.short(temp.fav);

      details.then(function (response) {
        temp.err="";
        if(response.status!==200)
          temp.err="No such menu number exists";
        else {
          MenuService.addUsers(temp.fname,temp.last,temp.email,temp.phone,temp.fav,response.data);
          temp.Success="Your information has been saved";
        }
      })
      ;
    };
  };
})()
