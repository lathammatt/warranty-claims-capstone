'use strict';

app.controller('ResultsCtrl', function($scope, DataFactory, MathFactory, $location) {

  $scope.claimsList = []


  const loadClaim = () => {
    $scope.presentClaim = DataFactory.getClaimDraft()
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

  $scope.viewClaim = (claim) => {
    for (let i = 0; i < $scope.claimsList.length; i++) {
      if ($scope.claimsList[i]._id === claim._id){
        $scope.presentClaim = {
          id: $scope.claimsList[i]._id,
          dealer: $scope.claimsList[i].dealer,
          rate: $scope.claimsList[i].rate,
          parts: $scope.claimsList[i].parts,
          totalParts: $scope.claimsList[i].totalParts,
          labor: $scope.claimsList[i].labor,
          laborHours: $scope.claimsList[i].laborHours,
          totalLabor: $scope.claimsList[i].totalLabor,
          claimTotal: $scope.claimsList[i].claimTotal
        }
      }
    }
  }


  loadClaim()
  loadHistory()

})