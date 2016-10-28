'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory, $location) {

  const loadClaim = () => {
    $scope.claimObject = DataFactory.getClaimDraft()
  }

  loadClaim();

$scope.claimSubmit = () => {
  //proceed to totals and all claims
}

$scope.redoClaim = () => {
  //delete claim and return to claim page, keep brand and dealer
}

$scope.resetPage = () => {
  //delete claim, return to dealer page, clear all
}


})