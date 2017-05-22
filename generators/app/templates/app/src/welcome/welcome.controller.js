'use strict';

module.exports = controller;

/* @ngInject */
function controller($log, toastr) {
  var vm = this;

  toastr.success('Hello world!', 'Toastr fun!');

  vm.welcomeMessage = 'Yet another generator for angular powered by webpack.';
  vm.testFunction = testFunction;

  if (__DEV__) { // eslint-disable-line no-undef
    $log.info('Initializing controller');
  }

  function testFunction(num) {
    $log.info('This is a test function number ' + num);
  }
}
