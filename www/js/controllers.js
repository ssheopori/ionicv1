angular.module('starter.controllers', [])

.controller('LoginController',function($state){    
    //placeholder for future code

    //dummy function to navigate to HomeController
    //using controllerAS syntax
    this.goHome = function(){
        console.log("i go home");
        $state.go('home');
    }
    



})

.controller('HomeController',function($state, userFactory, features){    
  
    this.userData = userFactory;
    this.featureData = features;
 
})

;  
