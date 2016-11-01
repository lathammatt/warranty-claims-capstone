'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory, $location) {

  const changeImg = () => {
    $('body').css('background-image', 'url(../img/interior.png)')
    $('body').css('background-position-y', "0")

  }

  changeImg()

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