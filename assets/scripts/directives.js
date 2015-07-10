'use strict';

(function(){

  var jfrescoDirectives = angular.module('jfrescoDirectives', []);

  jfrescoDirectives.directive("jfrescoNav", ["$location", function(){
    return {
      restrict: 'E',
      templateUrl: 'assets/partials/nav.html',
      controller: function($location) {

        this.isActive = function(checkIndex){
          this.resetActive();
          return this.active === checkIndex;
        };

        this.resetActive = function(){
          this.active = $location.path();
        };

        this.resetActive();
      },
      controllerAs: 'nav'
    };
  }]);

})();