(function () {

/**
 * Install plugin
 * @param Vue
 * @param localForage
 */

function plugin(Vue, localForage) {

  if (plugin.installed) {
    return
  }
  plugin.installed = true

  if (!localForage) {
    console.error('You have to install localForage')
    return
  }

  Vue.$vlf = localForage

  Object.defineProperties(Vue.prototype, {

    $vlf: {
      get() {
        return localForage
      }
    }

  })
}

if (typeof exports == "object") {
  module.exports = plugin
} else if (typeof define == "function" && define.amd) {
  define([], function(){ return plugin })
} else if (window.Vue && window.localForage) {
  Vue.use(plugin, window.localForage)
}

})();
