'use strict';

app.controller('ResultsCtrl', function($scope, DataFactory){

  const loadClaim = () => {
  $scope.finalClaim = DataFactory.getClaimDraft()
  }

  loadClaim()



})