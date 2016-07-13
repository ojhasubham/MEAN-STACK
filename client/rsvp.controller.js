'use strict';

angular.module('weddingSiteApp')
  .controller('RsvpCtrl', function ($scope, $location, $http) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;

    var countInvitation = function(varName) {
      var formSubmissionRef = new Firebase('https://sizzling-torch-5851.firebaseio.com/counter/'+varName);

      formSubmissionRef.transaction(function(currentRank) {
         // If /users/fred/rank has never been set, currentRank will be null.
        return currentRank+1;
      });
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };

    $scope.submit = function(valid) {

      if(!valid) {
        return false;
      }

      countInvitation('form_submission');

      $http.post('/api/things/', {
          firstName: $scope.yourName,
          middleName: $scope.middleName,
          lastName: $scope.lastName,
          country: $scope.country,
          state: $scope.state,
          address: $scope.address,
          postalCode: $scope.postalCode,
          telephone: $scope.telephone,
          fax: $scope.fax,
          email: $scope.email,
          message: $scope.yourMessage        
      })
      .success(function(result) {
        console.log(result);
        $scope.result = result;
        // countInvitation('form_submission_success');
      })
      .error(function(err) {
        $scope.error = err;
        // countInvitation('form_submission_error');
      })
      }
  });