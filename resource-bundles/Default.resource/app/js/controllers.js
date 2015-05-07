'use strict';

/* Controllers */

angular.module('Default.controllers', [])
  .controller('HomeCtrl', ['$scope', '$rootScope', '$filter', '$q', '$interval', '$location', '$timeout', 'Interceptor', 'Accounts', function($scope, $rootScope, $filter, $q, $interval, $location, $timeout, Interceptor, Accounts) {
  	Interceptor.start();
  	Accounts.get()
  		.then(function(result){
  			$scope.accounts = result;
  			$timeout(function(){
  				Interceptor.end();
  			},2000);
  		},
  		function(reason){
  			console.log('ERROR: ' + reason);
  		})
  }])
  .controller('ContactsCtrl', ['$scope', '$rootScope', '$filter', '$q', '$interval', '$location', '$timeout', 'Interceptor', 'Contacts', function($scope, $rootScope, $filter, $q, $interval, $location, $timeout, Interceptor, Contacts) {
  	Interceptor.start();
  	Contacts.get()
  		.then(function(result){
  			$scope.contacts = result;
  			$timeout(function(){
  				Interceptor.end();
  			},2000);
  		},
  		function(reason){
  			console.log('ERROR: ' + reason);
  		})
  }]);
