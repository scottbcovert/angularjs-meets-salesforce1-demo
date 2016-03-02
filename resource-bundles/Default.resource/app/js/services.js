'use strict';

/* Services */

angular.module('Default.services', [])
    .value('version', '0.1')
    .service('Records', ['$q', '$timeout', function($q, $timeout) {
		this.get = function(recordType) {
			var deferred = $q.defer(),
				action = 'DefaultController.get'+recordType;
			Visualforce.remoting.Manager.invokeAction(
				action,
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