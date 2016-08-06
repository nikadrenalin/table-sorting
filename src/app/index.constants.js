/* global malarkey:false, moment:false */
(function() {
  'use strict';

  angular
    .module('tableSorting')
    .constant('malarkey', malarkey)
    .constant('moment', moment)

    .constant('config', {
      api: {
        users: 'http://jsonplaceholder.typicode.com/users'
      },
      table: {
        itemsByPage: 3,
        pages: 7
      }
    });

})();
