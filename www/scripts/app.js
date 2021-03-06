'use strict';

/**
 * @ngdoc overview
 * @name yoNovisApp
 * @description
 * # yoNovisApp
 *
 * Main module of the application.
 */

Parse.initialize("1j0E51dRpLZBq2NhkYgxX87Cqxa2hPihxz4BMOQ1", "BbW4ni8kpXCauNMqWgI86ec7Exqq4AAeTqoPuEiy");


angular
  .module('yoNovisApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'angularParse',
    'ngCart',
    'underscore'
  ])

  .run(['$rootScope', function($scope) {
     //parse login


     //alert check for ordering too much of one item.
     $scope.$on('ngCart:change', function(event, args) {
       var quantityorder = args.qt;
       var inv = Parse.Object.extend("inventory");
       var query = new Parse.Query(inv);

       query.get( args.id ).then(function(item){
         if(item.attributes.quantity < args.qt ){
           alert("We have " + item.attributes.quantity + " in stock right now. We can order more if you'd like and ship to you when we have it.");
         }
       });

     });



     $scope.currentUser = Parse.User.current();
  /*
    $scope.currentUser = Parse.User.current();

     $scope.signUp = function(form) {
       var user = new Parse.User();
       user.set("email", form.email);
       user.set("username", form.username);
       user.set("password", form.password);

       user.signUp(null, {
         success: function(user) {
           $scope.currentUser = user;
          //  $scope.$apply();
         },
         error: function(user, error) {
           alert("Unable to sign up:  " + error.code + " " + error.message);
         }
       });
     };

     $scope.logIn = function(form) {
       Parse.User.logIn(form.username, form.password, {
         success: function(user) {
           $scope.currentUser = user;

          //  $scope.$apply();
         },
         error: function(user, error) {
           alert("Unable to log in: " + error.code + " " + error.message);

         }
       });
     };

*/


     $(".spinner").hide();
  }])



  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        label: "home"

      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/category/:catID', {
        templateUrl: 'views/category.html',
        controller: 'CategoryCtrl',
        label: "category"

      })
      .when('/product/:prodID', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        label: "Product"

      })
      .when('/account', {
        templateUrl: 'views/login-reg.html',
        controller: 'LoginregCtrl'
      })


      .when('/checkout', {
        templateUrl: 'views/checkout.html',
        controller: 'CheckoutCtrl'
      })



      .when('/complete/:orderID/:thanks?', {
        templateUrl: 'views/complete.html',
        controller: 'CompleteCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  })


  // DIRECTIVES
  .directive('productCard', function() {
    return {
      scope: true,  // use a child scope that inherits from parent
      restrict: 'AE',
      replace: 'true',
      templateUrl: 'partials/product_card.html'
    };
  })

  .directive('novImage', function(){
    return {
      scope: true,  // use a child scope that inherits from parent
      restrict: 'A',

      templateUrl: 'partials/images.html'
    };
  })


  ;


  var underscore = angular.module('underscore', []);
    underscore.factory('_', function() {
   return window._; // assumes underscore has already been loaded on the page
 });
