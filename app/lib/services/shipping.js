(function() {
    'use strict';

    var cache = {};

    function update($appEvent, shipping) {
      cache.option = shipping.option; 
      $appEvent.emit($shipping(), 'update', [shipping]);
    }

    function find() {
      return cache;
    }

    function $shipping($appEvent) {
      return {
        id: 2,
        update: angular.bind(this, update, $appEvent),
        find: angular.bind(this, find)
      }
    }

    $shipping.$inject = ['$appEvent'];

    angular.module('app')
      .factory('$shipping', $shipping);

})();
