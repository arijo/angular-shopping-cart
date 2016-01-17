(function() {
    'use strict';

    var catalog = [[{
        id: 1,
        title: 'Gucci Dive Mens Watch',
        price: {
          amount: '620.00',
          currency: '£'
        },
        src: '//6cecda1e60c454947866-2668915a1d3a077262c88fab6aa0aa02.r50.cf3.rackcdn.com/17371244_1_220.jpg'
      },{
        id: 2,
        title: 'Gucci Timeless Mens Watch',
        price: {
          amount: '525.00',
          currency: '£'
        },
        src: '//6cecda1e60c454947866-2668915a1d3a077262c88fab6aa0aa02.r50.cf3.rackcdn.com/17371245_1_220.jpg'
      },{
        id: 3,
        title: 'Gucci Timeless Mens Watch',
        price: {
          amount: '595.00',
          currency: '£'
        },
        src: '//6cecda1e60c454947866-2668915a1d3a077262c88fab6aa0aa02.r50.cf3.rackcdn.com/17371247_1_220.jpg'
      }],[{
        id: 4,
        title: 'Gucci Timeless Mens Watch',
        price: {
          amount: '1580.00',
          currency: '£'
        },
        src: '//6cecda1e60c454947866-2668915a1d3a077262c88fab6aa0aa02.r50.cf3.rackcdn.com/17371248_1_220.jpg'
      },{
        id: 5,
        title: 'Gucci G-Chrono Mens Watch',
        price: {
          amount: '1100.00',
          currency: '£'
        },
        src: '//6cecda1e60c454947866-2668915a1d3a077262c88fab6aa0aa02.r50.cf3.rackcdn.com/17371216_1_220.jpg'
    }]];

    function findAll(callback) {
      callback(catalog);
    }

    function $catalog() {
      return {
        findAll: findAll
      }
    }

    angular.module('app')
      .factory('$catalog', $catalog);

})();
