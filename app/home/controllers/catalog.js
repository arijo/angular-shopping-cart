(function() {
    'use strict';

    function add($scope, $cart, product) {
      $cart.add(product); 
    }

    function CatalogCtrl($scope, $catalog, $cart) {
      $scope.catalog = [];

      $scope.cart = {
        add: angular.bind(this, add, $scope, $cart)
      }

      $catalog.findAll(function(catalog) {
        $scope.catalog = catalog;
      });
    }

    CatalogCtrl.$inject = ['$scope', '$catalog', '$cart'];

    angular.module('app.home')
      .controller('CatalogCtrl', CatalogCtrl);

})();
