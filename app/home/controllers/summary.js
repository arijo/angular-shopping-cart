(function() {
    'use strict';

    function placeOrder($scope, $state, $summary) {
      $state.go('thanks');
    }

    function SummaryCtrl($scope, $state, $cart, $shipping, $summary, $appEvent) {
      $summary.update();
      $scope.summary = $summary.find();
      $scope.placeOrder = angular.bind(this, placeOrder, $scope, $state, $summary);

      $appEvent.on($cart, 'add', function(product, cart, $cart) {
        $summary.update();
      });
      $appEvent.on($cart, 'remove', function(product, cart, $cart) {
        $summary.update();
      });
      $appEvent.on($shipping, 'update', function(shipping, $shipping) {
        $summary.update();
      });
    }

    SummaryCtrl.$inject = ['$scope', '$state', '$cart', '$shipping', '$summary', '$appEvent'];

    angular.module('app.home')
      .controller('SummaryCtrl', SummaryCtrl);

})();
