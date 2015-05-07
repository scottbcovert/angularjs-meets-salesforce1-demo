'use strict';

/* Services */

angular.module('Default.services', [])
    .value('version', '0.1')
    .service('Accounts', ['$q', '$timeout', function($q, $timeout) {
		this.get = function() {
			var deferred = $q.defer();

			Visualforce.remoting.Manager.invokeAction(
				'DefaultController.getAccounts',
				function(result, event) {
					$timeout(function() {
						if (event) {
						  deferred.resolve(result);
						} else {
						  deferred.reject(result);	
						}
					});
				});

			return deferred.promise;
		}
	}])
	.service('Contacts', ['$q', '$timeout', function($q, $timeout) {
		this.get = function() {
			var deferred = $q.defer();

			Visualforce.remoting.Manager.invokeAction(
				'DefaultController.getContacts',
				function(result, event) {
					$timeout(function() {
						if (event) {
						  deferred.resolve(result);
						} else {
						  deferred.reject(result);	
						}
					});
				});

			return deferred.promise;
		}
	}])
