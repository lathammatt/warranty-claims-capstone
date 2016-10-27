'use strict';

app.controller("DealerCtrl", function($scope, $http, DataFactory, $location, MathFactory) {
  let shops = {}
  $scope.dealerList = []
  let selection = null

  DataFactory.getDealers()
    .then((object) => {
      console.log("dealers", object)
      shops = object
      console.log(shops)
    })

  $scope.brandSelect = (brand) => {
    console.log(shops)
    DataFactory.setDealer(null)
    $scope.dealerList = []
    selection = brand
    console.log(selection)

    for (let i = 0; i < shops.length; i++) {
      console.log("check", shops[i].name, selection)
      if (shops[i].brand === selection) {
        console.log(shops[i].name)
        $scope.dealerList.push(shops[i].name)
        console.log($scope.dealerList)
      }
    }
  }

  $scope.dealerChoice = (choice) => {
    console.log(choice)
    console.log(shops)
    DataFactory.setDealer(choice)
    for (let i = 0; i < shops.length; i++) {
      if (shops[i].name === choice) {
        MathFactory.setRate(shops[i].rate)
        DataFactory.setBrand(shops[i].brand)
      }
    }
  }

  $scope.startClaim = () => {
    let check = DataFactory.getDealer()
    if (check === null) {
      console.log("nope, not yet")
    } else {
      console.log("off to claim")
      $location.url('/claim')
    }
  }
})