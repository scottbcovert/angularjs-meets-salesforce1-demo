'use strict';


var myModule = angular.module('Default', ['ngRoute','ngAnimate','ngForce','Default.services','Default.filters','Default.directives','Default.controllers','ui.bootstrap','ui.grid','ui.grid.moveColumns','ui.grid.selection','ui.grid.exporter','ui.grid.resizeColumns']);

// Declare app level module which depends on filters, and services
myModule.
  config(['$routeProvider', function($routeProvider) {
    $routeProvider
    	.when('/', {templateUrl: sitePrefix+'/Home', controller: 'HomeCtrl'})
    	.otherwise({redirectTo: '/'});
  }]);