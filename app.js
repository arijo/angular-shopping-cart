(function() {
    'use strict';

    var app = angular.module('app', ['ui.router', 'app.home', 'app.thanks']);

    app.config(function( $stateProvider, $urlRouterProvider) {

      $urlRouterProvider
        .when('/', '/home')
        .otherwise('/');

    });

    app.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $state.go('home.default');

      }
    ]);

})();
