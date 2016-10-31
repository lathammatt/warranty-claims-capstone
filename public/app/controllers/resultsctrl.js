'use strict';

app.controller('ResultsCtrl', function($scope, DataFactory) {

  $scope.claimsList = []


  const loadClaim = () => {
    $scope.finalClaim = DataFactory.getClaimDraft()
  }


  const loadHistory = () => {
    let moneyArray = []
    let user = DataFactory.getDealer()
    DataFactory.getAll()
      .then((claims) => {
        for (let i = 0; i < claims.data.length; i++) {
          if (claims.data[i].dealer === user) {
            $scope.claimsList.push(claims.data[i])
            console.log($scope.claimsList)
            moneyArray.push(claims.data[i].claimTotal)
            $scope.dealerTotal = moneyArray.reduce((a, b) => a + b, 0)
          } else {}
        }
      })
  }

  const viewClaim = (id) => {

  }


  loadClaim()
  loadHistory()
})