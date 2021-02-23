const PubSub = require('pubsub-js');

(function() {
  var _pubsub = {
    publish: PubSub.publish,
    publishSync: PubSub.publishSync,
    subscribe: PubSub.subscribe,
    subscribeAll: PubSub.subscribeAll,
    subscribeOnce: PubSub.subscribeOnce,
    clearAllSubscriptions: PubSub.clearAllSubscriptions,
    clearSubscriptions: PubSub.clearSubscriptions,
    countSubscriptions: PubSub.countSubscriptions,
    getSubscriptions: PubSub.getSubscriptions,
    unsubscribe: PubSub.unsubscribe
  };

  // CommonJS and Node.js module support
  if (typeof exports === 'object'){
    if (module !== undefined && module.exports) {
        exports = module.exports = _pubsub; // Node.js specific `module.exports`
    }
    exports = _pubsub; // CommonJS module 1.1.1 spec
    module.exports = exports = _pubsub; // CommonJS
  }
  // AMD support
  /* eslint-disable no-undef */
  else if (typeof define === 'function' && define.amd){
    define(function() {
      return _pubsub;
    });
    /* eslint-enable no-undef */
  }
})();
