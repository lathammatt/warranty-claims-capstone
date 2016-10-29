'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory, $location) {

  const loadClaim = () => {
    $scope.claimObject = DataFactory.getClaimDraft()
  }

  loadClaim();

$scope.claimSubmit = () => {
  DataFactory.postClaim()
  $location.url('/results')
}

$scope.redoClaim = () => {
  DataFactory.redoRepair()
  $location.url('/claim')
}

$scope.resetPage = () => {
  DataFactory.restartClaim()
  $location.url('/dealer')
}


})