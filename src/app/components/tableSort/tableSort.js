(function() {
  'use strict';

  angular
    .module('tableSorting')
    .component('tableSort', {
      templateUrl: 'app/components/tableSort/tableSort.html',
      controller: refDataController,
      bindings: {
          users: '<'
        }
    });

    function refDataController(config) {
      var ctrl = this;

      ctrl.itemsByPage = config.table.itemsByPage;
      ctrl.displayedPages = config.table.pages;
    }

})();