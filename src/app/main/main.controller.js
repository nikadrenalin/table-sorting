(function() {
  'use strict';

  angular
    .module('tableSorting')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($filter, MainRestService ) {
    var vm = this;

    vm.displayedCollection = [];

    MainRestService.getUsers()
    .then(function (data) {
        if (data.length > 0) {
            
            vm.rowCollection = data;

            vm.rowList = data;
            vm.displayedCollection = [].concat(vm.rowList);
        }
    });

  }
})();
