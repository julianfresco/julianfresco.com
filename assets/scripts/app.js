'use strict';

(function() {
  /* App Module Declaration */
  var jfrescoApp = angular.module('jfrescoApp', [
    'ngRoute',
    'jfrescoControllers',
    'jfrescoDirectives'
  ]);
  /* Routes Config */
  jfrescoApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'assets/partials/intro.html',
        controller: 'IntroCtrl'
      }).
      when('/skills', {
        templateUrl: 'assets/partials/skills.html',
        controller: 'SkillsCtrl'
      }).
      when('/contact', {
        templateUrl: 'assets/partials/contact.html',
        controller: 'FormCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });

  }]);


})();