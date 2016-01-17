(function() {
    'use strict';

    var sources = {};

    function on(source, ev, handler) {
      var s = sources[source.id];
      if(s && s.ev) {
        return s.ev.push(handler);
      }
      if(s) {
        return s[ev] = [handler];
      }
      s = (sources[source.id] = {});
      s[ev] = [handler];
    }

    function emit(source, ev, data) {
      var s = sources[source.id];
      if(s && s[ev]) {
        s[ev].forEach(function(callback) {
          data.push(source);
          callback.apply(null, data);
        });
      }
    }

    function $appEvent() {
      return {
        on: on,
        emit: emit
      }
    }

    angular.module('app')
      .factory('$appEvent', $appEvent);

})();
