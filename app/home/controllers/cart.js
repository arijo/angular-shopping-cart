(function() {
    'use strict';

    function remove($scope, $cart, product) {
      $cart.remove(product);
    }

    function checkout($scope, $state, $cart) {
      $state.go('home.shipping');
    }

    function CartCtrl($scope, $state, $cart, $appEvent) {
      $scope.cart = $cart.findAll();

      $scope.remove = angular.bind(this, remove, $scope, $cart);
      $scope.checkout = angular.bind(this, checkout, $scope, $state, $cart);
    }

    CartCtrl.$inject = ['$scope', '$state', '$cart', '$appEvent'];

    angular.module('app.home')
      .controller('CartCtrl', CartCtrl);

})();
