'use strict';

app.controller("DealerCtrl", function($scope, $http, DataFactory) {
  let shops = {}
  $scope.dealerList = []
  let selection = null

  $http.get('/api/dealer')
    .then(({ data: dealers }) => {
      shops = dealers
      console.log(shops)
    })

  $scope.brandSelect = (brand) => {
    console.log(shops)
    // DataFactory.setDealer(null)
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
  }
})