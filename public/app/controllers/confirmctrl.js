'use strict';

app.controller("ConfirmCtrl", function($scope, DataFactory) {

  // const loadClaim = () => {
    DataFactory.getClaimDraft()
      .then((object) => {
        console.log("claim", object)
        $scope.claimObject = object
      })
  // }

// loadClaim();

})