(function() {
    'use strict';

    var cart = [];

    function add($appEvent, product) {
      if(cart.indexOf(product) > -1) {
        return;
      }
      cart.push(product);
      $appEvent.emit($cart(), 'add', [product, cart]);
    }

    function remove($appEvent, product) {
      cart.splice(cart.indexOf(product), 1);
      $appEvent.emit($cart(), 'remove', [product, cart]);
    }

    function findAll() {
      return cart;
    }

    function $cart($appEvent) {
      return {
        id: 1,
        add: angular.bind(this, add, $appEvent),
        remove: angular.bind(this, remove, $appEvent),
        findAll: angular.bind(this, findAll)
      }
    }

    $cart.$inject = ['$appEvent'];

    angular.module('app')
      .factory('$cart', $cart);

})();
