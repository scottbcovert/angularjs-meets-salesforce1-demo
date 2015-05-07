'use strict';

/* Controllers */

angular.module('Default.controllers', [])
  .controller('HomeCtrl', ['$scope', '$rootScope', '$filter', '$q', '$interval', '$location', 'Accounts', function($scope, $rootScope, $filter, $q, $interval, $location, Accounts) {
  	Accounts.get()
  		.then(function(result){
  			$scope.accounts = result;
  		},
  		function(reason){
  			console.log('ERRROR: ' + reason);
  		})
  }]);
