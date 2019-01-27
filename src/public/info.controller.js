(function () {
  angular.module('public')
  .controller("infoController",infoControllerMain);
  infoControllerMain.$inject = ["idk"];
  function infoControllerMain(idk) {
      var data =this;
      data.start_name="";
      data.last_name="";
      data.phone="";
      data.short_name="";
      data.description="";
      data.email="";
      data.name="";
      console.log(idk);
      if(idk.length!==0)
      {
        data.start_name=idk.start_name;
        data.last_name=idk.last_name;
        data.phone=idk.phone;
        data.short_name=idk.pdata.short_name;
        data.description=idk.pdata.description;
        data.email=idk.email;
        data.name=idk.pdata.name;
        data.img=idk.pdata.category_short_name;
      }
      else {
        data.error="Not Signed Up Yet. <a sref='/signup'>Sign up Now!"
      }


  }
})()
