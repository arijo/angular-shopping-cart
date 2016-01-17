(function() {
    'use strict';

    angular.module('app.thanks', ['ui.router', 'app.config'])
    	.config(function( $stateProvider, $urlRouterProvider, $configProvider) {

      var templateUrl = function(filename) {
        return $configProvider.templateUrl('thanks/views/' + filename);
      }

      $stateProvider
        .state('thanks', {
          url: '/thanks',
          templateUrl: templateUrl('thanks.html')
        })
    });
})();
