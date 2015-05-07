'use strict';


var myModule = angular.module('Default', ['ngRoute','ngAnimate','Default.services','Default.filters','Default.directives','Default.controllers','ui.bootstrap']);

// Declare app level module which depends on filters, and services
myModule.
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/', {templateUrl: sitePrefix+'/DefaultHome_Accounts', controller: 'HomeCtrl'})
    	.otherwise({redirectTo: '/'});
  }]);