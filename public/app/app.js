'use strict';

const app = angular.module("Warranty", [ngRoute])

app.config(function($routeProvider) {
  $routeProvider
    .when('/dealer', {
      templateUrl: 'partials/dealer.html',
      controller: 'DealerCtrl'
    })
    .otherwise('/')
})