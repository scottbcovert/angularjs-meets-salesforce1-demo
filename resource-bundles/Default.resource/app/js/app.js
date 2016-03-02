'use strict';


var myModule = angular.module('Default', ['ngRoute','ngAnimate','Default.services','Default.filters','Default.directives','Default.controllers','ui.bootstrap','ngLoading']);

// Declare app level module which depends on filters, and services
myModule.
  config(['$routeProvider', 'loadingProvider', function($routeProvider, loadingProvider) {
    $routeProvider
    	.when('/', {templateUrl: sitePrefix+'/DefaultHome_Accounts', controller: 'RecordsCtrl', resolve: {recordType : function(){return 'Accounts'}}})
    	.when('/contacts', {templateUrl: sitePrefix+'/DefaultHome_Contacts', controller: 'RecordsCtrl', resolve: {recordType : function(){return 'Contacts'}}})
    	.otherwise({redirectTo: '/'});

    //ngLoading Config
    loadingProvider
      .load({
          transitionSpeed: '.3s', //default
          class: 'spinner',
          overlay: {
            display: true, //required to apply an overlay
            color: '#FEFEFE', //default
            opacity: '.3' //default
          }
      });

  }]);