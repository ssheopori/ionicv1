angular.module('starter.services', [])

.factory('userFactory', function(){
  
  appUser                = {};
  appUser.displayName    = 'Homer Simpson';
  appUser.email          = 'simpsonh@homers.com';
  appUser.userID         = 'simpsonh';    
  appUser.imgUrl         = 'https://placekitten.com/150/150';    
  return appUser;  
  
})

.factory('features', function(){
  
  features = ["Firebase","LoDash","Font Awesome","ControllerAs Syntax"]; 
  return features;  
  
})

;