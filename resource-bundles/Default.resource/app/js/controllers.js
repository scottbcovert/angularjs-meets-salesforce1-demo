'use strict';

/* Controllers */

angular.module('Default.controllers', [])
  .controller('RecordsCtrl', ['$scope', '$rootScope', '$filter', '$q', '$interval', '$location', '$timeout', 'Interceptor', 'Records', 'recordType', function($scope, $rootScope, $filter, $q, $interval, $location, $timeout, Interceptor, Records, recordType) {
  	Interceptor.start();
  	Records.get(recordType)
  		.then(function(result){
  			$scope.records = result;
  			$timeout(function(){
  				Interceptor.end();
  			},2000);
  		},
  		function(reason){
  			console.log('ERROR: ' + reason);
  		})
  }]);
