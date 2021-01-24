import controller from './environmentVariablesPanel.controller.js';

angular.module('portainer.app').component('environmentVariablesPanel', {
  templateUrl: './environmentVariablesPanel.html',
  controller,
  bindings: {
    envVars: '=',
    explanation: '@',
  },
});