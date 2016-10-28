'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory) {

  const loadClaim = () => {
   $scope.claimObject = DataFactory.getClaimDraft()


  }

loadClaim();

})