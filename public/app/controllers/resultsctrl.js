'use strict';

app.controller('ResultsCtrl', function($scope, DataFactory) {

  $scope.claimsList = []


  const loadClaim = () => {
    $scope.finalClaim = DataFactory.getClaimDraft()
  }


  const loadHistory = () => {
    let user = DataFactory.getDealer()
    DataFactory.getAll()
      .then((claims) => {
        for (let i = 0; i < claims.data.length; i++) {
          if (claims.data[i].dealer === user) {
            $scope.claimsList.push(claims.data[i]._id)
          }
        }
      })
  }


  loadClaim()
  loadHistory()
})