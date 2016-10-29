'use strict';

const app = angular.module("Warranty", ['ngRoute'])

app.config(function($routeProvider) {
  $routeProvider
    .when('/dealer', {
      templateUrl: 'app/views/partials/dealer.html',
      controller: 'DealerCtrl'
    })
    .when('/claim', {
      templateUrl: 'app/views/partials/claim.html',
      controller: 'ClaimCtrl'
    })
    .when('/confirm', {
      templateUrl: 'app/views/partials/confirm.html',
      controller: 'ConfirmCtrl'
    })
    .when('/results', {
      templateUrl: 'app/views/partials/results.html',
      controller: 'ResultsCtrl'
    })
    .otherwise('/')
})