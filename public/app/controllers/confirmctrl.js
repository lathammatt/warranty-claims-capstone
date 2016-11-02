'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory, $location) {
  //----change background image----//
  const changeImg = () => {
    $('body').css('background-image', 'url(../img/interior.png)')
    $('body').css('background-position-y', "0")
  }
  changeImg()

  //----load pending claim object for viewing----//
  const loadClaim = () => {
    $scope.claimObject = DataFactory.getClaimDraft()
  }
  loadClaim();

  //----BUTTONS----//
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