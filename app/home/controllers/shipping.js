(function() {
    'use strict';

    function checkout($scope, $state, $shipping, shipping) {
      $shipping.update(shipping);
      $state.go('home.summary');
    }

    function ShippingCtrl($scope, $state, $shipping) {
      $scope.shipping = $shipping.find();
      $scope.checkout = angular.bind(this, checkout, $scope, $state, $shipping);
    }

    ShippingCtrl.$inject = ['$scope', '$state', '$shipping'];

    angular.module('app.home')
      .controller('ShippingCtrl', ShippingCtrl);

})();
