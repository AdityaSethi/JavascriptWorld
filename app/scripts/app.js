'use strict';

/**
 * @ngdoc overview
 * @name trainingApp
 * @description
 * # trainingApp
 *
 * Main module of the application.
 */
angular
  .module('trainingApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
