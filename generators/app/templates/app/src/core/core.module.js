'use strict';

require('./core.less');

var name = module.exports = '<%= name %>.core';

// Fix to make restangular work with webpack since it doesn't support common js.
// For more info: https://github.com/mgonto/restangular/issues/749
require('restangular');
require('angular-ui-bootstrap');
require('angular-toastr');

angular
  .module(name, [
    require('angular-ui-router'),
    'ui.bootstrap',
    'toastr',
    'restangular'
  ])
  .config(require('./restangular.config.js'))
  .config(require('./router.config.js'))
  .run(require('./router.run.js'))
  .config(function ($httpProvider) {
    $httpProvider.interceptors.push('requestInterceptor');
  })
  .factory('requestInterceptor', requestInterceptor)
;

function requestInterceptor($q) {
  return {
    request: function(config) {
      return config;
    },

    requestError: function(config) {
      return config;
    },

    response: function(res) {
      if(_.includes(res.config.url, 'api')) {
        return res.data;
      }
      return res;
    },

    responseError: function(res) {
      return $q.reject(res);
    }
  }
}




