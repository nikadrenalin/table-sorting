(function () {
'use strict';

angular.module('tableSorting')
.factory('MainRestService', function ($http, $q, config) {
    var Service = {

        getUsers: function () {
            var deferred = $q.defer();

            $http.get(config.api.users).success(function (response, status, headers, config) {

                deferred.resolve(response, status, headers, config);
            }).error(function (response, status, headers, config) {

                deferred.reject(response, status, headers, config);
            });

            return deferred.promise;
        }
    };

    return Service;
});

})();