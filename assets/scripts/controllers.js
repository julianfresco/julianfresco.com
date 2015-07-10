'use strict';

(function(){

  var jfrescoControllers = angular.module('jfrescoControllers', []);

  jfrescoControllers.controller('IntroCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('assets/data/intro.json').success(function(data) {
        $scope.intro = data || 0;
      });

    }]);

  jfrescoControllers.controller('SkillsCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('assets/data/skills.json').success(function(data) {
        $scope.skills = data.skills || 0;
        $scope.levels = data.levels || 0;
      });

      $scope.time = new Date;
      $scope.currentYear = $scope.time.getFullYear();
      $scope.active = false;
      $scope.showSkill = false;

      $scope.loadSkill = function(skillId){
        $scope.skills.map(function(skill){
          if(skill.id === skillId) {
            $scope.showSkill = skill;
          }

        });
      };

      $scope.checkExp = function(level){
        if (level > $scope.showSkill.levelId)
          return true;
        else
          return false;
      };
    }]);  



  jfrescoControllers.controller('FormCtrl', ['$scope', '$http',
    function ($scope, $http) {
      $http.get('assets/data/contact.json').success(function(data) {
        $scope.contact = data || 0;
      });

      $scope.responseMessage = ' ';
      $scope.responseClasses = 'text-info';

      $scope.sendForm = function(){
        $scope.responseMessage = ' ';

        var request = {
          method: 'POST',
          url: 'contact.php',
          headers: {
            'Content-Type': undefined
          },
          data: {
            'name': $scope.name,
            'user_email': $scope.user_email,
            'phone': $scope.phone,
            'subject': $scope.subject,
            'message': $scope.message
          },
        };

      $scope.response = $http(request
          ).success(function(data, status){
            console.log("data:");
            console.log(data);
            console.log("status:");
            console.log(status);
            
            $scope.responseMessage = data.message;
            $scope.responseClasses = 'text-success';

            $scope.name        = '';
            $scope.user_email  = '';
            $scope.phone       = '';
            $scope.subject     = '';
            $scope.message     = '';
          }).error(function(data, status){
            console.log("data:");
            console.log(data);
            console.log("status:");
            console.log(status);

            $scope.responseMessage = 'Error ' + status + ': ' + data;
            $scope.responseClasses = 'text-danger';
          });
      };

    }]);  

})();