(function() {
    'use strict';

    var delivery = {
      'home': 120.00,
      'collect' : 0
    }

    var summary = {
      items: [],
      subTotal: {
        cart: 0,
        shipping: 0
      },
      total:0
    }

    function find() {
      return summary;
    }

    function update($cart, $shipping) {
      summary.items = $cart.findAll();
      summary.subTotal.cart = summary.items.map(function(item) {
        return item.price.amount;
      })
      .reduce(function(previous, current) {
        return parseFloat(current) + parseFloat(previous);
      }).toFixed(2); 
      summary.subTotal.shipping = parseFloat(delivery[$shipping.find().option]).toFixed(2);
      summary.total = (parseFloat(summary.subTotal.cart) + parseFloat(summary.subTotal.shipping)).toFixed(2);
    }

    function $summary($cart, $shipping) {
      return {
        id: 3,
        find: angular.bind(this, find),
        update: angular.bind(this, update, $cart, $shipping)
      }
    }

    $summary.$inject = ['$cart', '$shipping'];

    angular.module('app')
      .factory('$summary', $summary);

})();
