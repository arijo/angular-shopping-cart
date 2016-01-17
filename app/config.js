(function() {
    'use strict';

    var basePath = 'app';

    function templateUrl(path) {
      return basePath + '/' + path;
    }

    function $configProvider() {
      this.templateUrl = templateUrl;
      this.$get = function() {
        return {}
      }
    }

    angular.module('app.config', [])
      .provider('$config', $configProvider);

})();
