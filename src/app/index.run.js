(function() {
  'use strict';

  angular
    .module('tableSorting')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
