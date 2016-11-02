'use strict';

app.controller('ResultsCtrl', function($scope, DataFactory, MathFactory, $location) {

  //----change background image----//
  const changeImg = () => {
    $('body').css('background-image', 'url(../img/gears.png)')
    $('body').css('background-position-y', "-95%")
  }
  changeImg()

  $scope.claimsList = []

  //----load submitted claim results to dom----//
  const loadClaim = () => {
    $scope.presentClaim = DataFactory.getClaimDraft()
  }

  //----get all claims from dealer, push ids to dom----//
  const loadHistory = () => {
      let moneyArray = []
      let user = DataFactory.getDealer()
      DataFactory.getAll()
        .then((claims) => {
          for (let i = 0; i < claims.data.length; i++) {
            if (claims.data[i].dealer === user) { //---find only this dealer's claims---//
              $scope.claimsList.push(claims.data[i])
              moneyArray.push(claims.data[i].claimTotal) //---put sum of each claim in array
              $scope.dealerTotal = moneyArray.reduce((a, b) => a + b, 0) //---tally up all claim totals
            } else {}
          }
        })
    }
    //----set up for displaying info for claim selected on page----//
  $scope.viewClaim = (claim) => {
    for (let i = 0; i < $scope.claimsList.length; i++) {
      if ($scope.claimsList[i]._id === claim._id) {
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

  //-----BUTTONS----//
  $scope.newClaim = () => {
    DataFactory.redoRepair()
    $location.url('/claim')
  }

  $scope.resetPage = () => {
    DataFactory.restartClaim()
    $location.url('/dealer')
  }

  loadClaim()
  loadHistory()

})