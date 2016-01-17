(function() {
    'use strict';

    angular.module('app.home', ['ui.router', 'app.config'])
      .config(function( $stateProvider, $urlRouterProvider, $configProvider) {

      var templateUrl = function(filename) {
        return $configProvider.templateUrl('home/views/' + filename);
      }

      $stateProvider
        .state('home', {
          url: '/',
          abstract: true,
          templateUrl: templateUrl('home.html')
        })
        .state('home.default', {
          url: '',
          views: {
            'catalog': {
              templateUrl: templateUrl('catalog.html'),
              controller: 'CatalogCtrl'
            },
            'cart': {
              templateUrl: templateUrl('cart.html'),
              controller: 'CartCtrl'
            },
            'shipping': {
              templateUrl: templateUrl('none.html')
            },
            'summary': {
              templateUrl: templateUrl('none.html')
            }
          }
        })
        .state('home.shipping', {
          url: '',
          views: {
            'catalog': {
              templateUrl: templateUrl('catalog.html'),
              controller: 'CatalogCtrl'
            },
            'cart': {
              templateUrl: templateUrl('cart.html'),
              controller: 'CartCtrl'
            },
            'shipping': {
              templateUrl: templateUrl('shipping.html'),
              controller: 'ShippingCtrl'
            },
            'summary': {
              templateUrl: templateUrl('none.html')
            }
          }
        })
        .state('home.summary', {
          url: '',
          views: {
            'catalog': {
              templateUrl: templateUrl('catalog.html'),
              controller: 'CatalogCtrl'
            },
            'cart': {
              templateUrl: templateUrl('cart.html'),
              controller: 'CartCtrl'
            },
            'shipping': {
              templateUrl: templateUrl('shipping.html'),
              controller: 'ShippingCtrl'
            },
            'summary': {
              templateUrl: templateUrl('summary.html'),
              controller: 'SummaryCtrl'
            }
          }
        })
    });
})();
